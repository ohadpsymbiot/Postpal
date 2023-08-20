var electron = require('electron'),
    app = electron.app,
    Menu = electron.Menu,
    MenuItem = electron.MenuItem,
    path = require('path'),
    _ = require('lodash').noConflict(),
    gpu = require('./gpu'),
    menuManager = {},
    os = require('os'),
    BrowserWindow = require('electron').BrowserWindow,
    appName = electron.app.getName(),
    APP_UPDATE = 'app-update',
    APP_UPDATE_EVENTS = 'app-update-events',
    CHECK_FOR_ELECTRON_UPDATE = 'checkForElectronUpdate',
    { createEvent } = require('../common/model-event'),
    { WORKSPACE_BUILDER, WORKSPACE_BROWSER, MODAL } = require('../common/constants/views'),
    { OPEN_WORKSPACE_IDENTIFIER, SCRATCHPAD } = require('../common/constants/pages'),
    enterpriseUtils = require('../services/enterpriseUtil'),
    SETTINGS_ID = 'settings',

    PROXY_ALLOWED_ENVIRONMENTS = ['PostmanDev', 'PostmanBeta', 'PostmanStage', 'PostmanCanary'],

    // Documentation for registering menu actions can be found in App.js~registerMenuActions
    getOsxTopBarMenuTemplate = async function () {
      return [{
        label: appName,
        submenu: _.compact([
          { role: 'about' },
          !enterpriseUtils.isEnterpriseApplication() ? {
            label: 'Check for Updates...',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('checkElectronUpdates', null, options); }
          } : null,
          !enterpriseUtils.isEnterpriseApplication() ? { type: 'separator' } : null,
          await gpu.getToggleMenuItem(),
          { type: 'separator' },
          {
            // Preferences in macOS opens the settings modal so id is kept as settings
            // which is same for windows and linux also
            label: 'Preferences',
            id: SETTINGS_ID,
            accelerator: 'CmdOrCtrl+,',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER, WORKSPACE_BROWSER], blockedPages: [SCRATCHPAD] }, options); }
          },
          {
            role: 'services',
            submenu: []
          },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideothers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ])
      },
      {
        label: 'File',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'openCreateNewModal'
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'openNewTab'
          },
          {
            label: 'New Runner Tab',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'newRunnerTab'
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', { type: 'shortcut', isGlobal: true }, options); },
            id: 'newRequesterWindow'
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'import'
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'closeCurrentTab'
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'forceCloseCurrentTab'
          }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            click: function (menuItem, browserWindow, options) {
              // this is only for MacOS as undo didnt work implicilty for this platform
              // we are relying on electron for the case of windows and linux
              menuManager.handleMenuAction('undo', { type: 'shortcut', isGlobal: true }, options);
             }
          },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            click: function (menuItem, browserWindow, options) {
              // this is only for MacOS as redo didnt work implicilty for this platform
              // we are relying on electron for the case of windows and linux
              menuManager.handleMenuAction('redo', { type: 'shortcut', isGlobal: true }, options);
             }
          },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          {
            label: 'Paste and Match Style',
            accelerator: 'CmdOrCtrl+Shift+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('pasteAndMatch', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Delete',
            click: function (menuItem, browserWindow, options) {
              // This is only for MacOS platform as "delete" didnt work implicilty for this platform
              // We are relying on electron for the windows and linux platform
              menuManager.handleMenuAction('delete', { type: 'shortcut', isGlobal: true }, options);
             }
          },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'togglefullscreen' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+numadd',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', { type: 'shortcut', isGlobal: true }, options); },
            id: 'increaseUIZoom'
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+numsub',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', { type: 'shortcut', isGlobal: true }, options); },
            id: 'decreaseUIZoom'
          },
          {
            label: 'Reset Zoom',
            accelerator: 'CmdOrCtrl+0',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('resetZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'toggleSidebar'
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'toggleLayout'
          },
          { type: 'separator' },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', { type: 'shortcut', isGlobal: true }, options); },
            id: 'newConsoleWindow'
          },
          {
            label: 'Developer',
            submenu: [
              {
                label: 'Show DevTools (Current View)',
                accelerator: (function () {
                  if (process.platform == 'darwin') {
                    return 'Alt+Command+I';
                  }
                  else {
                    return 'Ctrl+Shift+I';
                  }
                }()),
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', { type: 'shortcut', isGlobal: true }, options); }
              },
              { type: 'separator' },
              {
                label: 'View Logs in Finder',
                click: function () { menuManager.handleMenuAction('openLogsFolder'); }
              }
            ]
          }
        ]
      },
      {
        role: 'window',
        submenu: [
          { role: 'minimize' },
          { role: 'zoom' },
          { role: 'close' },
          { type: 'separator' },
          {
            label: 'Go Back',
            accelerator: 'CmdOrCtrl+[',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('navigateToPreviousPage', { type: 'shortcut', blockedPages: [SCRATCHPAD] }, options); }
          },
          {
            label: 'Go Forward',
            accelerator: 'CmdOrCtrl+]',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('navigateToNextPage', { type: 'shortcut', blockedPages: [SCRATCHPAD] }, options); }
          },
          {
            label: 'Next Tab',
            accelerator: 'CmdOrCtrl+Shift+]',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'switchToNextTab'
          },
          {
            label: 'Previous Tab',
            accelerator: 'CmdOrCtrl+Shift+[',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'switchToPreviousTab'
          },
          { type: 'separator' },
          { role: 'front' }
        ]
      },
      {
        role: 'help',
        submenu: _.compact([
          PROXY_ALLOWED_ENVIRONMENTS.includes(appName) ? {
            label: 'Setup Web Gateway Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openWebGatewayProxyWindow', { type: 'shortcut', isGlobal: true }, options); }
          } : null,
          PROXY_ALLOWED_ENVIRONMENTS.includes(appName) ?
          { type: 'separator' } : null,
          {
            label: 'Clear Cache and Reload',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('clearCacheAndReload'); }
          },
          { type: 'separator' },
          {
            label: 'Documentation',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/docs', options); }
          },
          {
            label: 'GitHub',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/github', options); }
          },
          {
            label: 'Twitter',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/twitter', options); }
          },
          {
            label: 'Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/support', options); }
          }
        ])
      }];
    },
    getTopBarMenuTemplate = async function () {
      return [{
        label: 'File',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'openCreateNewModal'
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'openNewTab'
          },
          {
            label: 'New Runner Tab',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'newRunnerTab'
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', { type: 'shortcut', isGlobal: true }, options); },
            id: 'newRequesterWindow'
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'import'
          },
          {
            label: 'Settings',
            id: SETTINGS_ID,
            accelerator: 'CmdOrCtrl+,',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER, WORKSPACE_BROWSER], blockedPages: [SCRATCHPAD] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'closeCurrentTab'
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'forceCloseCurrentTab'
          },
          { role: 'quit' }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'togglefullscreen' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+=',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', { type: 'shortcut', isGlobal: true }, options); },
            id: 'increaseUIZoom'
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', { type: 'shortcut', isGlobal: true }, options); },
            id: 'decreaseUIZoom'
          },
          {
            label: 'Reset Zoom',
            accelerator: 'CmdOrCtrl+0',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('resetZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'toggleSidebar'
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'toggleLayout'
          },
          { type: 'separator' },
          {
            label: 'Go Back',
            accelerator: 'Alt+Left',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('navigateToPreviousPage', { type: 'shortcut', blockedPages: [SCRATCHPAD] }, options); }
          },
          {
            label: 'Go Forward',
            accelerator: 'Alt+Right',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('navigateToNextPage', { type: 'shortcut', blockedPages: [SCRATCHPAD] }, options); }
          },
          {
            label: 'Next Tab',
            accelerator: 'CmdOrCtrl+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'switchToNextTab'
          },
          {
            label: 'Previous Tab',
            accelerator: 'CmdOrCtrl+Shift+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER], allowedPages: [OPEN_WORKSPACE_IDENTIFIER] }, options); },
            id: 'switchToPreviousTab'
          },
          { type: 'separator' },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', { type: 'shortcut', isGlobal: true }, options); },
            id: 'newConsoleWindow'
          },
          {
            label: 'Developer',
            submenu: [
              {
                label: 'Show DevTools (Current View)',
                accelerator: (function () {
                  if (process.platform == 'darwin') {
                    return 'Alt+Command+I';
                  }
                  else {
                    return 'Ctrl+Shift+I';
                  }
                }()),
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', { type: 'shortcut', isGlobal: true }, options); }
              },
              { type: 'separator' },
              {
                label: process.platform === 'win32' ? 'View Logs in Explorer' : 'View Logs in File Manager',
                click: function () { menuManager.handleMenuAction('openLogsFolder'); }
              }
            ]
          }
        ]
      },

      /**
       * If current platform is linux and SNAP is running, removing the update flow
       */
      {
        label: 'Help',
        role: 'help',
        submenu: _.compact([
          app.isUpdateEnabled ? {
            label: 'Check for Updates',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('checkElectronUpdates', null, options); }
          } : null,
          app.isUpdateEnabled ?
          { type: 'separator' } : null,
          {
            label: 'Clear Cache and Reload',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('clearCacheAndReload'); }
          },
          { type: 'separator' },
          PROXY_ALLOWED_ENVIRONMENTS.includes(appName) ? {
            label: 'Setup Web Gateway Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openWebGatewayProxyWindow', { type: 'shortcut', isGlobal: true }, options); }
          } : null,
          PROXY_ALLOWED_ENVIRONMENTS.includes(appName) ?
          { type: 'separator' } : null,
          await gpu.getToggleMenuItem(),
          { type: 'separator' },
          {
            label: 'Documentation',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/docs', options); }
          },
          {
            label: 'GitHub',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/github', options); }
          },
          {
            label: 'Twitter',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/twitter', options); }
          },
          {
            label: 'Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://go.pstmn.io/support', options); }
          }
        ])
      }];
    },
    dockMenuTemplate = [
      {
        label: 'New Collection',
        click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newCollection', null, options); }
      },
      {
        label: 'New Window ',
        click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', null, options); }
      }
    ];
menuManager = {
  dockMenuTemplate: dockMenuTemplate,
  windowsApplicationContextMenu: null,

  createMenu: function (shortcutsDisabled = false) {
    return this.getMenuBarTemplate().then((template) => {
      const applicationMenu = Menu.buildFromTemplate(
        shortcutsDisabled ? this.removeShortcuts(template) : template
      );

      if (process.platform == 'win32') {
        this.windowsApplicationContextMenu = applicationMenu;
      }

      Menu.setApplicationMenu(applicationMenu);
    });
  },

  removeShortcuts: function (menu) {
    return _.map(menu, (menuItem) => {
      if (_.has(menuItem, 'submenu')) {
        _.set(menuItem, 'submenu', this.removeShortcuts(menuItem.submenu));
      }
      return _.omit(menuItem, ['accelerator']);
    });
  },

  updateMenuItems: function (windowType) {
    if (windowType === 'requester') {
      this.showMenuItem(SETTINGS_ID);
    }
    else if (windowType === 'console') {
      this.hideMenuItem(SETTINGS_ID);
    }
  },

  showMenuItem: function (menuItemId) {
    let menuItem = Menu.getApplicationMenu().getMenuItemById(menuItemId);

    if (menuItem) {
      menuItem.visible = true;
    }
  },

  hideMenuItem: function (menuItemId) {
    let menuItem = Menu.getApplicationMenu().getMenuItemById(menuItemId);

    if (menuItem) {
      menuItem.visible = false;
    }
  },

  /**
   * Creates a new OS menu from updated menubar template
   * @param {Map} updatedShortcuts shortcut names with user provided shortcut combinations
   */
  updateMenu: function (updatedShortcuts) {
    this.getMenuBarTemplate().then((template) => {
      const updatedMenu = this.updateShortcutInMenu(template, updatedShortcuts);
      const applicationMenu = Menu.buildFromTemplate(updatedMenu);

      if (process.platform == 'win32') {
        this.windowsApplicationContextMenu = applicationMenu;
      }

      Menu.setApplicationMenu(applicationMenu);
    });
  },

  /**
   * creates & returns a new menu template from the default menu template
   * by updating shortcuts with user provided shortcut combinations
   *
   * @param {Array} menu current menu template
   * @param {Map} updatedShortcuts shortcut names with user provided shortcut combinations
   * @returns menu template with updated shortcut values
   */
  updateShortcutInMenu: function (menu, updatedShortcuts) {
    return _.map(menu, (menuItem) => {
      if (updatedShortcuts.has(menuItem.id) && _.has(menuItem, 'accelerator')) {
        const updatedAccelerator = updatedShortcuts.get(menuItem.id);
        _.set(menuItem, 'accelerator', updatedAccelerator);
      }
      if (_.has(menuItem, 'submenu')) {
        _.set(
          menuItem,
          'submenu',
          this.updateShortcutInMenu(menuItem.submenu, updatedShortcuts)
        );
      }
      return menuItem;
    });
  },

  getMenuBarTemplate: function () {
    var platform = os.platform();
    if (platform === 'darwin') {
      return getOsxTopBarMenuTemplate();
    }
    else {
      return getTopBarMenuTemplate();
    }
  },

  handleMenuAction: function (action, meta, options) {
    // This import is moved from the global to here because it is only required here
    // and if kept global produces a cyclic dependency where menuManager imports windowManager
    // and vice versa which causes one of the module to be undefined.
    let windowManager = require('./windowManager').windowManager;

    // If the menu action is a global action and is to be handled in the main process itself,
    // we put it inside this if condition so that it is carried out without checking any further constraints
    if (meta && meta.type === 'shortcut' && meta.isGlobal) {
      if (action === 'toggleDevTools') {
        let win = BrowserWindow.getFocusedWindow();
        if (win && win.webContents) {
          windowManager.toggleDevTools(win);
        }
      }
      else if (action === 'newWindow') {
        windowManager.createOrRestoreRequesterWindow();
      }
      else if (action === 'openConsole') {
        windowManager.sendInternalMessage({
          event: 'showPostmanConsole',
          'object': { triggerSource: 'menuAction' }
        });
      }
      else if (action === 'undo') {
        let win = BrowserWindow.getFocusedWindow();
        if (win && win.webContents) {
          win.webContents.undo();
          win.webContents.send('menu-action-channel', 'undo');
        }
      }
      else if (action === 'redo') {
        let win = BrowserWindow.getFocusedWindow();
        if (win && win.webContents) {
          win.webContents.redo();
          win.webContents.send('menu-action-channel', 'redo');
        }
      }
      else if (action === 'delete') {
        let win = BrowserWindow.getFocusedWindow();
        if (win && win.webContents) {
          win.webContents.delete();
          win.webContents.send('menu-action-channel', 'delete');
        }
      }
      else if (action === 'closeWindow') {
        let win = BrowserWindow.getFocusedWindow();
        win && win.close();
      }
      else if (action === 'pasteAndMatch') {
        let focusedWebContents = electron.webContents && electron.webContents.getFocusedWebContents();
        focusedWebContents && focusedWebContents.pasteAndMatchStyle();
      }
    }

    if (action === 'openCustomUrl') {
      windowManager.openCustomURL(meta);
    }
    else if (action === 'checkElectronUpdates') {
      let updaterEventBus = global.pm.eventBus.channel(APP_UPDATE_EVENTS);
      updaterEventBus.publish({ name: CHECK_FOR_ELECTRON_UPDATE, namespace: APP_UPDATE });
    }
    else if (action === 'openLogsFolder') {
      // shell.openItem is deprecated from electron v9, hence changed to shell.openPath
      // https://github.com/electron/governance/blob/master/wg-api/spec-documents/shell-openitem.md
      electron.shell.openPath(electron.app.logPath).then((errorMessage) => {
        if (errorMessage) {
          pm.logger.error(`MenuManager~handleMenuAction: Failed to open logs folder ${errorMessage}`);
        }
      });
    }
    else if (action === 'clearCacheAndReload') {
      // Clear HTTP Cache
      let win = BrowserWindow.getFocusedWindow();
      win && win.webContents && win.webContents.session && win.webContents.session.clearCache();

      // Send an event to clear Service Workers and custom cache
      // This happens in the renderer process
      pm.eventBus.channel('menuActions').publish(createEvent('clearCacheAndReload', 'menuActions'));
    }
    else if (action === 'openWebGatewayProxyWindow') {
      windowManager.setWindowsDefaultVisibilityState(false);
      windowManager.closeRequesterWindows();
      windowManager.openWebBasedProxyWindow();
    }
    else {
      let win = BrowserWindow.getFocusedWindow();
      pm.eventBus.channel('menuActions').publish(createEvent(action, 'menuActions', { windowId: _.get(win, 'params[0].id') }, [], meta));
    }
  }
};

exports.menuManager = menuManager;
