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
        JSON.stringify(token)
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
      resolve(JSON.parse(accessToken));
    } catch (er) {
      reject(er);
    }
  });
};

const removeAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await keytar.deletePassword(keytarService, keytarAccount);
      if (result) {
        resolve({
          code: "LOGGED_OUT",
          message: "You have been logged out!"
        });
      } else {
        reject({
          code: "USER_NOT_FOUND",
          message: "No user found!! "
        });
      }
    } catch (err) {
      reject({
        code: "KEYTAR_ERROR",
        error: err
      });
    }
  });
};

module.exports = {
  setAccessToken,
  getAccessToken,
  removeAccessToken
};
