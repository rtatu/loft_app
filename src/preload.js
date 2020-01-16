const { ipcRenderer, remote, webContents } = require("electron");

window.electronRenderer = ipcRenderer;
window.electronRemote = remote;
window.wc = webContents;

window.__devtron = { require: require, process: process };
