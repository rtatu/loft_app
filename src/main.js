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

let window = {};

class App {
  constructor() {
    app.on("ready", () => {
      this.createLoadingWindow(
        500,
        500,
        URL.LOADING_WINDOW_PATH,
        "loadingWindow"
      );
      this.init();
    });
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("activate", this.onActivate);
    this.registerIpcChannels();

    // console.log(new Auth().getCurrentUser(), "12333");
    // this.loadState();
  }

  // manually dispatch the action
  init = async () => {
    try {
      let data = await Authentication.getAccessToken();
      if (data.token) {
        // mainStore.dispatch();
        // console.log(window);
        window["loadingWindow"].close();
        console.log(window);
      }
    } catch (err) {
      console.log(err);
      this.closeLoadingAndCreateMainWindow();
    }
  };

  closeLoadingAndCreateMainWindow = () => {};

  onWindowAllClosed = () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  };

  onActivate = () => {
    if (window["mainWindow"] === null) {
      createWindow(1366, 768, URL.MAIN_WINDOW, "mainWindow");
    }
  };

  createWindow = (width, height, url, windowName) => {
    window[windowName] = windowManager.createWindow(width, height);
    windowManager.applyEventListener(window, windowName, url);
  };

  createLoadingWindow = (width, height, url, windowName) => {
    window[windowName] = windowManager.createLoadingWindow(width, height);
    windowManager.applyEventListener(window, windowName, url);
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

    ipcMain.on("tokenReq", async (event, payload) => {
      let data = {};
      try {
        data["token"] = await Authentication.getAccessToken();
      } catch (err) {
        data["error"] = err;
      }
      event.sender.send("tokenRes", data);
    });
  };
}

new App();
