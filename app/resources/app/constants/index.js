exports.HTML_MAP = {
  requester: 'requester.html',
  scratchpad: 'scratchpad.html', // Requires a scratchpad build
  console: 'console.html',
  offline: 'desktop-offline.html',
  'no-scratchpad': 'no-scratchpad.html' // When all users are logged out, requester.html is replaced by no-scratchpad
};

exports.WINDOW_EVENTS_MAP = {
  requester: 'setWindowIds',
  runner: 'setRunnerWindowId'
};


exports.AUTH_ACTIONS = {
  SIGN_UP: 'signup',
  LOGIN: 'login',
  SWITCH_USER: 'switch',
  LOGOUT: 'logout',
  SKIP: 'skip'
};

exports.IPC_EVENT_NAMES = {
  GET_LOGGEDIN_USERS: 'users-list-update',
  SEND_TO_MAIN: 'sendToMain',
  VIEW_READY: 'viewReady',
  UPDATE_WEBVIEW_URL: 'updateWebviewURL',
  RELOAD: 'reload',
  CLEAR_CACHE_AND_RELOAD: 'clearCacheAndReload',
  GET_PARTITION_ID: 'getPartitionId',
  GET_LAUNCH_PARAMS: 'getLaunchParams',
  GET_OFFLINE_DATA: 'getOfflineData',
  GET_PLATFORM_LAUNCH_PERF_METRICS: 'getPlatformLaunchPerfMetrics',
  CHECK_USERS_PARTITION: 'checkUsersPartition'
};

exports.EVENT_BUS_EV_NAMES = {
  WINDOW_LOADED: 'window-loaded'
};
