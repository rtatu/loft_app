const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;


const createWindow = (width, height, loadUrl) => {

    let dataMaintenanceWindow = null
    // Create the browser window.
    dataMaintenanceWindow = new BrowserWindow({
        width : width,
        height : height,
    });

    // and load the index.html of the app.
    dataMaintenanceWindow.loadURL(loadUrl);

    // Emitted when the window is closed.
    dataMaintenanceWindow.on('closed', function () {
        dataMaintenanceWindow = null
    })

    return dataMaintenanceWindow
}
module.exports = createWindow