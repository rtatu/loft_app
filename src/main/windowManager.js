const { BrowserWindow, app } = require("electron");
const path = require("path");

const createWindow = (width, height) => {
  require("devtron").install;
  return new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(app.getAppPath(), "/src/main/preload.js")
    }
  });
};

const createLoadingWindow = (width, height) => {
  return new BrowserWindow({
    width,
    height,
    frame: false
  });
};

const applyEventListener = (window, url) => {
  window.setMenuBarVisibility(false);

  // and load the index.html of the app.
  window.loadURL(url);

  // Emitted when the window is closed.
  window.on("closed", function() {
    console.log("window is closed bitch!!!");
    window = null;
  });

  window.webContents.on("did-finish-load", () => {
    window.show();
  });
};

module.exports = {
  createWindow,
  applyEventListener,
  createLoadingWindow
};
