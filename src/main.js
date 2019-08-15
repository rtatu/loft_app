const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const { ipcMain } = require("electron");
const events = require('./electron/events')


console.log(path.join(app.getAppPath(), 'src/preload.js'))


let window = {
    mainWindow : null,
    formWindow : null
}

function createWindow() {
    // Create the browser window.
    window.mainWindow = new BrowserWindow({
        width : 1366,
        height : 768,
        webPreferences : {
            preload: path.join(app.getAppPath(), 'src/preload.js'),
            contextIsolation: true
        }
    });

    // and load the index.html of the app.
    window.mainWindow.loadURL('http://localhost:8000/');

    // Emitted when the window is closed.
    window.mainWindow.on('closed', function () {
        window.mainWindow = null
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
    if (window.mainWindow === null) {
        createWindow()
    }
});

