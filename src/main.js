const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const { ipcMain } = require("electron");


let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width : 1366,
        height : 768,
        preload: path.join(app.getAppPath(), 'bundle.js')
    });

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000/');

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});


// osx
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
