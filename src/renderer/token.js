const getToken = () => {
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

const setToken = token => {
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

export { getToken, setToken };
