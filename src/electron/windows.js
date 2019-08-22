const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const app = electron.app;

const createWindow = (width, height, loadUrl) => {
  let dataMaintenanceWindow = null;
  // Create the browser window.
  dataMaintenanceWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(app.getAppPath(), "src/preload.js")
      // contextIsolation: true
    }
  });

  // and load the index.html of the app.
  dataMaintenanceWindow.loadURL(loadUrl);

  // Emitted when the window is closed.
  dataMaintenanceWindow.on("closed", function() {
    dataMaintenanceWindow = null;
  });

  return dataMaintenanceWindow;
};
module.exports = createWindow;
