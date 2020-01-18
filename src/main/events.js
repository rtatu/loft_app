const { ipcMain, webContents } = require("electron");
const keytar = require("keytar");
const Authentication = require("../services/authentication");

const initEvents = () => {};

const keytarTokenEvent = () => {
  ipcMain.on("keytar-token", async (event, payload) => {
    let token = await Authentication.getAccessToken();
    event.sender.send(token);
    let allWebContents = webContents.getAllWebContents();
  });
};
