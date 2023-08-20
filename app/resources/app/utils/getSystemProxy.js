var _ = require('lodash'),
    ProxyConfig = require('postman-collection').ProxyConfig,
    CloudProxyManager = require('../services/CloudProxyManager'),
    HTTP_PROTOCOL = 'http',
    HTTPS_PROTOCOL = 'https',
    ALLOWED_PROTOCOLS = [HTTP_PROTOCOL, HTTPS_PROTOCOL],
    ALLOWED_PROTOCOLS_REGEX = ALLOWED_PROTOCOLS.join('|'),
    PROTOCOL_SEPARATOR = '://',
    HTTP_PROTOCOL_SEPARATOR = HTTP_PROTOCOL + PROTOCOL_SEPARATOR,
    HTTPS_PROTOCOL_SEPARATOR = HTTPS_PROTOCOL + PROTOCOL_SEPARATOR;

/**
 *  @param {PostmanUrl} url resolved request url
 *  @param {function} cb callback
 *
 * @returns {undefined}
 */
module.exports = (url, cb) => {
  var session = require('electron').session.defaultSession,
      regexes = {
        hostPortMatcher: /PROXY (([^:]+):(\d+))/,
        validUrlTester: '^(' + ALLOWED_PROTOCOLS_REGEX + ')://'
      },
      sanitizedUrl = (url.match(regexes.validUrlTester)) ? url : HTTP_PROTOCOL_SEPARATOR + url,
      protocol = sanitizedUrl.split('://')[0],
      match,
      host,
      port,
      authenticate,
      username,
      password;

  try {
    CloudProxyManager.resolveProxy(sanitizedUrl, (err, value, authInfo) => {
      if (err) {
        cb(err);
      }

      if (value === 'DIRECT') {
        return cb(null, undefined);
      }

      /**
        Electron return: 'DIRECT' || 'PROXY [host]:port;PROXY [host]:port;...'
        Using a regex we separate out the host and port
        Having prototol in host is invalid (Should we strip-out the protocol for the user?)
      */
      // value = 'PROXY [http://0.0.0.0]:8080;DIRECT;PROXY 0.0.0.0:8081'
      match = value.match(regexes.hostPortMatcher);

      if (!match) {
        // System proxy defined has invalid syntax
        pm.logger.warn('getSystemProxy - System proxy defined has invalid syntax');
        return cb(null, undefined);
      }

      host = match[2];
      port = parseInt(match[3], 10);
      if (authInfo) {
        authenticate = true;
        username = authInfo.username;
        password = authInfo.password;
      }

      return cb(null, new ProxyConfig({
        host: host,
        port: port,
        protocols: [protocol],
        authenticate: authenticate,
        username: username,
        password: password
      }));
    });
  }
  catch (e) {
    return cb(e);
  }
};
