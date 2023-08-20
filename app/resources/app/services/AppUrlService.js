const electron = require('electron');
const { getConfig } = require('./AppConfigService');
const VersionDependencyService = require('../services/VersionDependencyService');
const getQPString = require('../utils/getQPString');

const app = electron.app;
const RELEASE_CHANNEL = getConfig('__WP_RELEASE_CHANNEL__');
const BASE_URL = getConfig('__WP_DESKTOP_UI_UPDATE_URL__');
const DESKTOP_VERSION_QP = 'desktopVersion';
const WEB_VERSION_QP = 'webVersion';

/**
 * Get the url of the web app that needs to be loaded in the browser window
 * depending on htmlFileName
 *
 * @param {string} htmlFileName Provide HTML file name from HTML_TYPE map
 * @param {Record<string, string>} userContext
 *
 * @returns {String}
 */
module.exports = function getAppUrl (htmlFileName, userContext) {
  if (RELEASE_CHANNEL === 'dev') {
    return `${BASE_URL}/${htmlFileName}`;
  }

  let queryParams = getDesktopReleaseVersionAsQueryParams(userContext);
  return `${BASE_URL}${(/console/).test(htmlFileName) ? '/console' : ''}${queryParams}`;
};

/**
 * Returns the release version as query params
 * @returns {Promise<string>}
 */
function getDesktopReleaseVersionAsQueryParams (userContext) {
  const currentServedRelease = VersionDependencyService.webAppVersion;
  const queryParams = { [DESKTOP_VERSION_QP]: app.getVersion() };

  if (currentServedRelease) {
    queryParams[WEB_VERSION_QP] = currentServedRelease;
  }

  if (userContext && userContext.teamId && userContext.userId) {
    queryParams.userId = userContext.userId;
    queryParams.teamId = userContext.teamId;
  }

  return getQPString(queryParams);
}
