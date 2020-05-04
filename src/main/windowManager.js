const { BrowserWindow, app } = require("electron");
const path = require("path");

const createWindow = (width, height) => {
  require("devtron").install;
  return new BrowserWindow({
    width,
    height,
    webPreferences: {
      preload: path.join(app.getAppPath(), "/src/main/preload.js"),
      nodeIntegration: false
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

const applyEventListener = (window, windowName, url) => {
  window[windowName].setMenuBarVisibility(false);

  // and load the index.html of the app.
  window[windowName].loadURL(url);

  // Emitted when the window is closed.
  window[windowName].on("closed", function() {
    console.log("window is closed bitch!!!");
    if(windowName == "mainWindow") {
      console.log("closing all window set to true")
      window["allWindowClosed"] = true
      app.quit();
    }
    window[windowName] = null;
  });

  window[windowName].webContents.on("did-finish-load", () => {
    window[windowName].show();
  });
};

module.exports = {
  createWindow,
  applyEventListener,
  createLoadingWindow
};
