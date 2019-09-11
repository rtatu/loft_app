const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const { ipcMain } = require("electron");

let window = {};

// creating the main window
function createWindow(width, height, url, windowName) {
  // Create the browser window.
  window[windowName] = new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(app.getAppPath(), "src/preload.js")
      // contextIsolation: true
    }
  });

  // and load the index.html of the app.
  window[windowName].loadURL(url);

  // Emitted when the window is closed.
  window[windowName].on("closed", function() {
    window[windowName] = null;
  });

  require("devtron").install();
}

// app event listners
app.on("ready", () =>
  createWindow(950, 768, "http://localhost:8000/", "mainWindow")
);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// osx
app.on("activate", function() {
  if (window["mainWindow"] === null) {
    createWindow(1366, 768, "http://localhost:8000/", "mainWindow");
  }
});

// ipcMain window creater event listeners

ipcMain.on("database-maintenance", (event, data) => {
  createWindow(
    1366,
    768,
    "http://localhost:8000/#/database-maintenance/lists/class",
    "dataMaintenanceWindow"
  );
});

ipcMain.on("new-form", (event, data) => {
  let { formName } = data;
  let { editMode } = data;
  let { datastore } = data;
  createWindow(
    1366,
    768,
    `http://localhost:8000/#/form/${formName}${editMode ? "?editMode" : ""}`,
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

// form actions

ipcMain.on("form-resize", (event, data) => {
  const { width, height } = data;
  window.formWindow.setSize(width, height);
  // window.formWindow.center();
});
ipcMain.on("form_action", (event, data) => {
  // form action -> archive-context listener -> window["mainWindow"]
  if (window.dataMaintenanceWindow) {
    window.dataMaintenanceWindow.webContents.send(
      "archive_context_listener",
      data
    );
  }
});

// data table actions
