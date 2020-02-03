const electron = require("electron");
const app = electron.app;
const { ipcMain } = require("electron");
const windowManager = require("./main/windowManager");
const mainStore = require("./store/mainStore");
const URL = require("./config/urls");
const Authentication = require("./services/authentication");
const Auth = require("./utils/@loftsdk/auth");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const ACTION = require("./store/actions");
const EVENTS = require("./main/events");
const Database = require("./utils/@loftsdk/database");

let appWindows = {};

class App {
  constructor() {
    app.on("ready", this.init);
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("activate", this.onActivate);
  }

  // initiliaze app
  init = async () => {
    let userData = {};
    // first create loading window
    this.createLoadingWindow(
      500,
      500,
      URL.LOADING_WINDOW_PATH,
      "loadingWindow"
    );

    // check if user's token is saved
    try {
      userData = await new Auth().getCurrentUser();
      if (!userData) {
        mainStore.dispatch({ type: ACTION.LOG_IN, payload: {} });
      } else {
        mainStore.dispatch({ type: ACTION.LOG_IN, payload: userData });
      }
      setTimeout(() => {
        this.closeLoadingAndCreateMainWindow();
      }, 5000);
    } catch (error) {
      console.log(error);
      this.closeLoadingAndCreateMainWindow();
    }

    // after fetching close the loading window and create app window

    // register ipc channels for comm
    this.registerIpcChannels();
  };

  // fetch initial data

  initFetch = async () => {};

  closeLoadingAndCreateMainWindow = () => {
    appWindows["loadingWindow"].close();
    this.createWindow(1300, 800, URL.MAIN_WINDOW, "mainWindow");
  };

  onWindowAllClosed = () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  };

  onActivate = () => {
    if (appWindows["mainWindow"] === null) {
      createWindow(1366, 768, URL.MAIN_WINDOW, "mainWindow");
    }
  };

  createWindow = (width, height, url, windowName) => {
    if (!url || !windowName) return;
    appWindows[windowName] = windowManager.createWindow(
      width || 1366,
      height || 768
    );
    windowManager.applyEventListener(appWindows, windowName, url);
  };

  createLoadingWindow = (width, height, url, windowName) => {
    appWindows[windowName] = windowManager.createLoadingWindow(width, height);
    windowManager.applyEventListener(appWindows, windowName, url);
  };

  registerIpcChannels = () => {
    ipcMain.on("create_new_window", (event, data) => {
      let { width, height, url, name } = data;
      if (!url) console.error("no url provided for creating window");
      if (!name) console.error("no name provided for window");
      this.createWindow(width, height, url, name);
    });
    // keytarTokenEvents
    EVENTS.keytarTokenEvent();
  };
}

new App();
