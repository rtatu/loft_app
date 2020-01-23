const { ipcMain } = require("electron");
const Authentication = require("../services/authentication");

const keytarTokenEvent = () => {
  ipcMain.on("tokenReq", async (event, payload) => {
    let data = {};
    try {
      data["token"] = await Authentication.getAccessToken();
    } catch (err) {
      data["error"] = err;
    }
    event.sender.send("tokenRes", data);
  });
};

module.exports = {
  keytarTokenEvent
};
