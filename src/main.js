const electron = require("electron");
const app = electron.app;
const path = require("path");
const { ipcMain } = require("electron");
const windowManager = require("./main/windowManager");
const mainStore = require("./store/mainStore");

// window path name
const LOADING_WINDOW_PATH = path.join(
  __dirname,
  "screens/loading/loading.html"
);

const MAIN_WINDOW = "http://localhost:8000";

const FORM_WINDOW = "http://localhost:8000/#/form/";

const DATA_MAINTENANCE_WINDOW =
  "http://localhost:8000/#/database-maintenance/lists/class";

let window = {};

const createWindow = (width, height, url, windowName) => {
  window[windowName] = windowManager.createWindow(width, height);
  windowManager.applyEventListener(window[windowName], url);
};

app.on("ready", () => {
  // window["loadingWindow"] = windowManager.createLoadingWindow(500, 500);
  // windowManager.applyEventListener(
  //   window["loadingWindow"],
  //   LOADING_WINDOW_PATH
  // );

  // window["mainWindow"] = windowManager.createWindow(950, 768);
  // windowManager.applyEventListener(
  //   window["mainWindow"],
  //   "http://localhost:8000"
  // );

  createWindow(950, 768, MAIN_WINDOW, "mainWindow");
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// osx
app.on("activate", function() {
  if (window["mainWindow"] === null) {
    createWindow(1366, 768, MAIN_WINDOW, "mainWindow");
  }
});

// ipcMain window creater event listeners

ipcMain.on("database-maintenance", (event, data) => {
  createWindow(1366, 768, DATA_MAINTENANCE_WINDOW, "dataMaintenanceWindow");
});

ipcMain.on("new-form", (event, data) => {
  let { formName } = data;
  let { editMode } = data;
  let { datastore } = data;
  createWindow(
    1366,
    768,
    `${FORM_WINDOW}${formName}${editMode ? "?editMode" : ""}`,
    "formWindow"
  );

  if (editMode) {
    window["formWindow"].webContents.once("did-finish-load", () => {
      window.formWindow.webContents.send("form_edit_mode", {
        data: data.data,
        datastore: datastore
      });
    });
  } else {
    console.log("sending data");

    window["formWindow"].webContents.once("did-finish-load", () => {
      window.formWindow.webContents.send("form_edit_mode", {
        datastore: datastore
      });
    });
  }
});

// ipcMain data exchange event listener

ipcMain.on("form_action", (event, data) => {
  // form action -> archive-context listener -> window["mainWindow"]
  if (window.dataMaintenanceWindow) {
    window.dataMaintenanceWindow.webContents.send(
      "archive_context_listener",
      data
    );
  }
});

ipcMain.on("form_action_response", (event, data) => {
  if (window.formWindow) {
    window.formWindow.webContents.send("action_response", data);
  }
});

// data table actions
