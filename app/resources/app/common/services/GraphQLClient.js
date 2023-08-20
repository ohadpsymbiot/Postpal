const _ = require('lodash');
const { URL } = require('url');
const { EventEmitter } = require('events');
const { promisify } = require('util');
const { getIntrospectionQuery, parse, visit } = require('graphql');
const { createClient } = require('graphql-ws');
const { SubscriptionClient } = require('subscriptions-transport-ws');
const WebSocket = require('postman-ws');
const request = require('postman-request');
const collectionSDK = require('postman-collection');
const { authorizeRequest } = require('postman-runtime/lib/authorizer');
const {
  makePushPullAsyncIterableIterator,
} = require('@n1ru4l/push-pull-async-iterable-iterator');
const EventChannel = require('../channels/EventChannel');
const PostmanFs = require('../utils/postmanFs');

const REQUEST_TIMEOUT = 10000;

class GraphQLClient {
  constructor (cwd) {
    this.cwd = cwd;
  }

  // Returns the response body of a GET request, as a string.
  // This will be used to fetch GraphQL schemas by URL.
  async getFromURL (url) {
    return new Promise((resolve, reject) => {
      request(url, { timeout: REQUEST_TIMEOUT }, (err, response, body) => {
        if (err) {
          reject(err);
        } else if (response.statusCode >= 300) {
          reject(
            new Error(
              `GET failed with ${response.statusCode} ${response.statusMessage} (${url})`
            )
          );
        } else {
          resolve(String(body));
        }
      });
    });
  }

  // Performs a simple GraphQL introspection query.
  async introspect ({ url, auth, headers }, options = {}) {
    const graphQLParams = {
      operationName: 'IntrospectionQuery',
      query: getIntrospectionQuery(),
    };

    const channel = await this.execute(graphQLParams, { url, auth, headers, ...options });
    channel.link(channel); // Allows us to treat it like a regular EventEmitter

    return new Promise((resolve, reject) => {
      channel.on('received-response', (e) => resolve(e.payload));
      channel.on('error', (e) => reject(new Error(e.payload.error.message)));
    });
  }

  // Performs a GraphQL query, mutation, or subscription.
  async execute (graphQLParams, options) {
    const operationType = tryGetOperationType(graphQLParams);

    graphQLParams = _.omitBy(graphQLParams, _.isNil); // Clean up the request data
    options = { ...options, operationType, cwd: this.cwd };

    if (operationType === 'query') {
      return executeRequest(graphQLParams, options);
    }
    if (operationType === 'mutation') {
      return executeRequest(graphQLParams, options);
    }
    if (operationType === 'subscription') {
      return executeSubsription(graphQLParams, options);
    }

    throw new Error(`Unrecognized operation type: ${operationType}`);
  }
}

/**
 * Executes a GraphQL query or mutation over HTTP.
 */
async function executeRequest (
  graphQLParams,
  {
    url,
    auth,
    headers,
    operationType,
    followRedirects = true,
    verifySSLCertificates = false,
    certificate,
    cwd
  }
) {
  const channel = new EventChannel();

  const authHeaders = await getAuthHeaders(auth);
  const combinedHeaders = assignHeaders(headers, authHeaders);

  const cert = certificate ? await loadCertificate(certificate, { cwd }) : {};

  // Send an HTTP request representing the query or mutation.
  const httpRequest = request.post(
    {
      url: validateURL(url),
      headers: combinedHeaders,
      body: JSON.stringify(graphQLParams),

      time: true,
      followRedirect: followRedirects,
      strictSSL: verifySSLCertificates,

      cert: cert?.crt,
      key: cert?.key,
      pfx: cert?.pfx,
      ca: cert?.ca,
      passphrase: cert?.passphrase
    },
    () => {}
  );

  // Emit these events asynchronously.
  setImmediate(() => {
    emit(channel, 'sent-request', { ...graphQLParams, operationType });
    emit(
      channel,
      'transport:http:sent-request',
      getHTTPRequestContext(httpRequest)
    );
  });

  // Interpret the response, and output results to the channel.
  httpRequest
    .on('error', (err) => {
      pm.logger.error(err);
      emit(channel, 'error', {
        error: { message: err.message || 'An unknown error occurred' },
      });
      channel.destroy();
    })
    .on('complete', (httpResponse) => {
      emit(
        channel,
        'transport:http:received-response',
        getHTTPResponseContext(httpResponse, true)
      );

      const graphQLResponse = getGraphQLResponse(httpResponse.body);
      if (graphQLResponse) {
        emit(channel, 'received-response', graphQLResponse);
        emit(channel, 'ended', { cancelled: false });
      } else {
        emit(channel, 'error', {
          error: {
            message:
              httpResponse.statusCode >= 300
                ? `Unsuccessful GraphQL request, ${httpResponse.statusCode} ${httpResponse.statusMessage}`
                : 'Received an invalid GraphQL response',
          },
        });
      }

      channel.destroy();
    });

  // Accept events received from the channel.
  channel
    .addCleanup(() => httpRequest.abort())
    .on('cancel', () => {
      emit(channel, 'ended', { cancelled: true });
      channel.destroy();
    });

  return channel;
}

/**
 * Executes a GraphQL subscription over WebSockets.
 */
async function executeSubsription (
  graphQLParams,
  {
    url,
    auth,
    headers,
    legacySubscriptions = false,
    followRedirects = true,
    verifySSLCertificates = false,
  }
) {
  url = validateURL(url, true);
  headers = assignHeaders(headers, await getAuthHeaders(auth));

  const channel = new EventChannel();
  const websocketEvents = new EventEmitter();
  const webSocketImpl = createCustomWebSocket(
    { headers, followRedirects, rejectUnauthorized: verifySSLCertificates },
    websocketEvents
  );
  let asyncIterable;
  let abort;

  // Open a WebSocket connection representing the subscription.
  // The user can optionally use the legacy subscriptions protocol.
  if (legacySubscriptions) {
    const legacyClient = new SubscriptionClient(url, undefined, webSocketImpl);
    abort = () => legacyClient.close();
    asyncIterable = makeAsyncIterableIteratorFromSink(
      (sink) => legacyClient.request(graphQLParams).subscribe(sink).unsubscribe
    );
  } else {
    const client = createClient({ url, webSocketImpl });
    abort = () => client.dispose().catch(pm.logger.error.bind(pm.logger));
    asyncIterable = makeAsyncIterableIteratorFromSink((sink) =>
      client.subscribe(graphQLParams, {
        ...sink,
        error: (event) => {
          if (isCloseEvent(event)) sink.complete();
          else sink.error(event);
        },
      })
    );
  }

  // Emit this event asynchronously.
  setImmediate(() => {
    emit(channel, 'sent-request', {
      ...graphQLParams,
      operationType: 'subscription',
    });
  });

  let didConnect = false;
  let hadError = null;

  // Interpret the AsyncIterable, and output results to the channel.
  Promise.resolve()
    .then(async () => {
      for await (const graphQLResponse of asyncIterable) {
        emit(
          channel,
          'received-response',
          _.pick(graphQLResponse, ['data', 'errors', 'extensions'])
        );
      }
    })
    .catch((err) => {
      // Weirdly, the GraphQL subscriptions client may throw an Array, in which
      // case it represents an array of errors from a GraphQL response.
      if (Array.isArray(err)) {
        emit(channel, 'received-response', { errors: err });
      } else {
        hadError = err;
      }
    });

  // Interpret the raw WebSocket events, and output results to the channel.
  websocketEvents
    .on('open', (ws) => {
      didConnect = true;
      emit(channel, 'transport:ws:connected', getWSHandshakeContext(ws));
    })
    .on('error', (ws, err) => {
      const event = {
        error: { message: err.message || 'An unknown error occurred' },
      };

      if (didConnect) {
        // If a connection was successfully made, then wait for "close" event.
        emit(channel, 'transport:ws:error', event);
        hadError = hadError || err;
      } else {
        // Otherwise, emit handshake details and destroy the channel.
        emit(channel, 'transport:ws:error', {
          ...event,
          ...getWSHandshakeContext(ws),
        });
        emit(channel, 'error', event);
        channel.destroy();
      }
    })
    .on('close', (ws, code, reason) => {
      emit(channel, 'transport:ws:disconnected', { code, reason });
      if (hadError) {
        emit(channel, 'error', {
          error: { message: hadError.message || 'An unknown error occurred' },
        });
      } else {
        emit(channel, 'ended', { cancelled: false });
      }
      channel.destroy();
    });

  // Accept events received from the channel.
  channel.addCleanup(abort).on('cancel', () => {
    emit(channel, 'ended', { cancelled: true });
    channel.destroy();
  });

  return channel;
}

/**
 * Returns whether the given GraphQL operation is a "query", "mutation", or "subscription".
 */
function tryGetOperationType ({ query, operationName }) {
  let operationType = 'query';

  if (query) {
    try {
      visit(parse(query), {
        OperationDefinition: (node) => {
          if (operationName === node.name?.value) {
            operationType = node.operation;
          }
        },
      });
    } catch (_error) {
      // It's ok to send invalid queries, ignore errors
    }
  }

  return operationType;
}

/**
 * Parses a GraphQL JSON response, or returns null if it's not a valid GraphQL response.
 */
function getGraphQLResponse (rawResponse) {
  let parsed;
  try {
    parsed = JSON.parse(rawResponse);
  } catch (_) {
    return null;
  }

  if (!isObject(parsed)) return null;
  if (!isObject(parsed.data) && !Array.isArray(parsed.errors)) return null;
  return _.pick(parsed, ['data', 'errors', 'extensions']);
}

/**
 * Ensures that the given URL is valid for a GraphQL request.
 */
function validateURL (url, isSubscription) {
  const protocols = isSubscription ? ['ws:', 'wss:'] : ['http:', 'https:'];

  if (!(/^[a-z0-9+.-]+:\/\//i).test(url)) {
    url = protocols[0] + '//' + url;
  }

  let parsedURL;
  try {
    parsedURL = new URL(url);
  } catch (_) {
    const error = new Error(`Invalid URL: ${url}`);

    error.code = 'ERR_INVALID_URL';

    throw error;
  }

  // Magically "fix" the protocol, if reasonable.
  if (isSubscription) {
    parsedURL.protocol = parsedURL.protocol.replace(/^http(?=s?:$)/, 'ws');
  } else {
    parsedURL.protocol = parsedURL.protocol.replace(/^ws(?=s?:$)/, 'http');
  }

  if (!protocols.includes(parsedURL.protocol)) {
    const givenProtocol = parsedURL.protocol.replace(/:$/, '');
    const suggestion = protocols[0] + '//';
    const error = new Error(
      `Invalid protocol "${givenProtocol}", try "${suggestion}" instead`
    );

    error.code = 'ERR_INVALID_URL';

    throw error;
  }

  return url;
}

const supportedAuthTypes = new Set([
  'noauth',
  'awsv4',
  'basic',
  'bearer',
  'hawk',
  'oauth1',
  'oauth2',
  'apikey',
  'edgegrid',
]);

/**
 * Return auth headers based on the auth extension provided by the user.
 *
 * @param {Object} auth - JSON representation of collectionSDK.RequestAuth
 * @returns {Object}
 */
async function getAuthHeaders (auth) {
  if (!auth) {
    return null;
  }

  if (!auth.type || (!auth[auth.type] && auth.type !== 'noauth')) {
    throw new Error('Invalid auth format');
  }

  if (!supportedAuthTypes.has(auth.type)) {
    throw new Error(`Unsupported authorization type: ${auth.type}`);
  }

  return new Promise((resolve, reject) => {
    authorizeRequest(new collectionSDK.Request({ auth }), (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(
          _.fromPairs(result.headers.toJSON().map((x) => [x.key, x.value]))
        );
      }
    });
  });
}

/**
 * Merges HTTP headers in a case-insensitive fashion
 */
function assignHeaders (target, ...sources) {
  const pairs = new Map();
  for (const [key, value] of Object.entries(target || {})) {
    pairs.set(key.toLowerCase(), { key, value });
  }
  for (const source of sources) {
    for (const [key, value] of Object.entries(source || {})) {
      pairs.set(key.toLowerCase(), { key, value });
    }
  }

  const mergedHeaders = {};
  for (const { key, value } of pairs.values()) {
    mergedHeaders[key] = value;
  }

  return mergedHeaders;
}

/**
 * Creates a subclass of WebSocket that sends custom headers when connecting,
 * and emits lifecycle events to a given EventEmitter.
 */
function createCustomWebSocket (options, eventEmitter) {
  return class CustomWebSocket extends WebSocket {
    constructor (url, subprotocols) {
      super(url, subprotocols, options);

      if (eventEmitter) {
        this.on('open', (...args) => eventEmitter.emit('open', this, ...args));
        this.on('close', (...args) =>
          eventEmitter.emit('close', this, ...args)
        );
        this.on('error', (...args) =>
          eventEmitter.emit('error', this, ...args)
        );
      }
    }

    getHandshakeRequest () {
      return this._debug ? this._debug[0].request : undefined;
    }

    getHandshakeResponse () {
      return this._debug
        ? this._debug[this._debug.length - 1].response
        : undefined;
    }
  };
}

/**
 * Checks if a value is a WebSocket CloseEvent.
 */
function isCloseEvent (value) {
  return isObject(value) && 'code' in value && 'reason' in value;
}

/**
 * Returns the contextual HTTP request data expected by Scribe.
 */
function getHTTPRequestContext (request, includeBody = false) {
  const context = {
    method: request.method,
    headers: Object.entries(request.headers).map(([key, value]) => ({
      key,
      value: String(value),
    })),
    sizes: {
      headers:
        Buffer.byteLength(Object.entries(request.headers).flat().join('')) +
        Object.keys(request.headers).length * 3, // For ":" and CRLF
      body: Buffer.byteLength(request.body || ''),
    },
  };

  if (includeBody) {
    context.body = request.body;
  }

  return context;
}

/**
 * Returns the contextual HTTP response data expected by Scribe.
 */
function getHTTPResponseContext (response, includeBody = false) {
  const context = {
    statusCode: response.statusCode,
    statusMessage: response.statusMessage,
    headers: _.chain(response.rawHeaders)
      .chunk(2)
      .map(([key, value]) => ({ key, value }))
      .value(),
    sizes: {
      headers:
        Buffer.byteLength(response.rawHeaders.join('')) +
        (response.rawHeaders.length / 2) * 3, // For ":" and CRLF
      body: Buffer.byteLength(response.body || ''),
    },
    timings: response.timings,
  };

  if (includeBody) {
    context.body = response.body;
  }

  return context;
}

/**
 * Returns the contextual WebSocket handshake data expected by Scribe.
 */
function getWSHandshakeContext (ws) {
  return _.omitBy(
    {
      handshakeRequest: _.pick(ws.getHandshakeRequest(), ['method', 'headers']),
      handshakeResponse: _.pick(ws.getHandshakeResponse(), [
        'statusCode',
        'statusMessage',
        'headers',
      ]),
    },
    _.isEmpty
  );
}

/**
 * Load certificate files from paths
 */
async function loadCertificate (certificate, { cwd }) {
  const postmanFs = new PostmanFs(cwd);
  const readFile = promisify(postmanFs.readFile.bind(postmanFs));

  const [crt, key, ca, pfx] = await Promise.all([
    certificate.crt ? readFile(certificate.crt) : undefined,
    certificate.key ? readFile(certificate.key) : undefined,
    certificate.ca ? readFile(certificate.ca) : undefined,
    certificate.pfx ? readFile(certificate.pfx) : undefined,
  ]);

  return { crt, key, ca, pfx, passphrase: certificate.passphrase };
}

/**
 * This emits an event to the given channel, using the format expected by Scribe.
 */
function emit (channel, eventName, payload) {
  channel.emit(eventName, {
    type: eventName,
    timestamp: new Date().toISOString(),
    payload,
  });
}

/**
 * Check if value is non-null + non-Array object
 */
function isObject (value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * The package "@n1ru4l/push-pull-async-iterable-iterator" implements their own
 * version of this function, but it is written in such a way that it causes
 * UnhandledPromiseRejectionWarnings to be emitted.
 */
function makeAsyncIterableIteratorFromSink (make) {
  const { pushValue, asyncIterableIterator } =
    makePushPullAsyncIterableIterator();
  const dispose = make({
    next: (value) => {
      pushValue(value);
    },
    complete: () => {
      asyncIterableIterator.return().catch(() => {});
    },
    error: (err) => {
      asyncIterableIterator.throw(err).catch(() => {});
    },
  });
  const originalReturn = asyncIterableIterator.return;
  let returnValue;
  asyncIterableIterator.return = () => {
    if (returnValue === undefined) {
      dispose();
      returnValue = originalReturn();
    }
    return returnValue;
  };
  return asyncIterableIterator;
}

module.exports = GraphQLClient;
