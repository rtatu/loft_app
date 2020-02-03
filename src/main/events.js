const { ipcMain } = require("electron");
const Authentication = require("../services/authentication");

const keytarTokenEvent = () => {
  // token get Req
  ipcMain.on("tokenReq", async (event, payload) => {
    let data = {};
    console.log("request came");
    try {
      data["token"] = await Authentication.getAccessToken();
    } catch (err) {
      data["error"] = err;
    }
    event.sender.send("tokenRes", data);
  });

  // token post Req
  ipcMain.on("tokenSetReq", async (event, payload) => {
    let data = {};
    try {
      let res = await Authentication.setAccessToken(payload);
      data["message"] = "LOGGED_IN";
    } catch (err) {
      data["error"] = err;
    }
    event.sender.send("tokenSetRes", data);
  });

  // token del Req
  ipcMain.on("tokenDelReq", async (event, payload) => {
    let data = {};
    try {
      let res = await Authentication.removeAccessToken();

      data["res"] = res;
    } catch (error) {
      data["error"] = error;
    }

    event.sender.send("tokenDelRes", data);
  });
};

module.exports = {
  keytarTokenEvent
};
