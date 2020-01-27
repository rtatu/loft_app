const mainAuth = require("../../services/authentication");
const rendererAuth = require("../../renderer/token");
const isRenderer = require("../isRenderer");

const service = (type, payload) => {
  switch (type) {
    case "GET":
      if (!isRenderer) return mainAuth.getAccessToken();
      return rendererAuth.getAccessToken();
    case "POST":
      if (!isRenderer) return mainAuth.setAccessToken(payload.data);
      return rendererAuth.setAccessToken(payload.data);
    case "DELETE":
      if (!isRenderer) return mainAuth.removeAccessToken();
      return rendererAuth.removeAccessToken();
    default:
      throw new Error("service not defined");
  }
};

const Storage = () => {
  return {
    get: () => service("GET"),
    set: payload => service("POST", payload),
    remove: () => service("DELETE")
  };
};

module.exports = Storage;
