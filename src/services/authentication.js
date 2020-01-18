const keytar = require("keytar");
const os = require("os");

const keytarService = "loft-logistics";
const keytarAccount = os.userInfo().username;

const setAccessToken = token => {
  return new Promise(async (resolve, reject) => {
    try {
      let accessToken = await keytar.setPassword(
        keytarService,
        keytarAccount,
        token
      );
      resolve(accessToken);
    } catch (er) {
      reject(er);
    }
  });
};

const getAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let accessToken = await keytar.getPassword(keytarService, keytarAccount);
      resolve(accessToken);
    } catch (er) {
      reject(er);
    }
  });
};

module.exports = {
  setAccessToken,
  getAccessToken
};
