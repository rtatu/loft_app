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

let appWindows = {};

class App {
  constructor() {
    app.on("ready", this.init);
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("activate", this.onActivate);
  }

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
    appWindows[windowName] = windowManager.createWindow(width, height);
    windowManager.applyEventListener(appWindows, windowName, url);
  };

  createLoadingWindow = (width, height, url, windowName) => {
    appWindows[windowName] = windowManager.createLoadingWindow(width, height);
    windowManager.applyEventListener(appWindows, windowName, url);
  };

  registerIpcChannels = () => {
    ipcMain.on("database-maintenance", (event, data) => {
      this.createWindow(
        1366,
        768,
        URL.DATA_MAINTENANCE_WINDOW,
        "dataMaintenanceWindow"
      );
    });

    ipcMain.on("new-form", (event, data) => {
      let { formName } = data;
      let { editMode } = data;
      let { datastore } = data;
      this.createWindow(
        1366,
        768,
        `${URL.FORM_WINDOW}${formName}${editMode ? "?editMode" : ""}`,
        "formWindow"
      );
    });

    // keytarTokenEvents
    EVENTS.keytarTokenEvent();
  };
}

new App();
