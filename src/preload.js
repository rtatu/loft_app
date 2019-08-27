const { ipcRenderer, remote, webContents } = require("electron");

console.log("preloading");

console.log(webContents);

window.electronRenderer = ipcRenderer;
window.electronRemote = remote;
window.wc = webContents;

window.__devtron = { require: require, process: process };
