const { ipcRenderer, remote, webContents, ipcMain } = require("electron");

console.log("rohit tatu");

window.electronRenderer = ipcRenderer;
window.electronRemote = remote;
window.wc = webContents;
window.ipcMain = ipcMain;

window.__devtron = { require: require, process: process };
