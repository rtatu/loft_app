const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    electronRenderer.send("tokenReq");
    electronRenderer.once("tokenRes", (event, payload) => {
      if (payload.error) {
        reject(payload.error);
      } else {
        resolve(payload.token);
      }
    });
  });
};

const setAccessToken = token => {
  return new Promise((resolve, reject) => {
    electronRenderer.send("tokenSetReq", token);
    electronRenderer.once("tokenSetRes", (event, payload) => {
      if (payload.error) {
        reject(payload.error);
      } else {
        resolve(payload.message);
      }
    });
  });
};

const removeAccessToken = () => {
  return new Promise((resolve, reject) => {
    electronRenderer.send("tokenDelReq");
    electronRenderer.once("tokenDelRes", (event, payload) => {
      if (payload.error) {
        reject(payload.error);
      } else {
        resolve(payload.res);
      }
    });
  });
};

module.exports = {
  getAccessToken,
  setAccessToken,
  removeAccessToken
};
