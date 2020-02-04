const axios = require("axios").default;
const Storage = require("./storageFunction");
const lists = require("./links");
const normalize = require("./normalize");

class Database {
  constructor() {
    this.axiosConfig = {};
  }
  setToken = async () => {
    try {
      let currentUser = await Storage().get();
      if (!currentUser) console.error("user is not logged in");

      this.axiosConfig["headers"] = {
        Authorization: `Bearer ${currentUser.token}`
      };
    } catch (error) {
      console.error(error);
    }
  };
  // set url for http method
  ref = url => {
    if (this.url) {
      throw new Error("can not call ref twice");
    }
    this.url = process.env.BASE_API_URL + url;
    this.axiosConfig["url"] = this.url;
    return this;
  };

  // get data at specific url -- GET
  get = () => {
    return new Promise(async (resolve, reject) => {
      await this.setToken();
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "GET" });
        if (!result.data) reject("some error occurred");
        resolve(normalize(result.data));
      } catch (error) {
        reject(error);
      }
    });
  };

  // set data at specific url -- PUT
  set = data => {
    return new Promise(async (resolve, reject) => {
      await this.setToken();
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "PUT", data });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  // create data at specific url -- POST
  create = data => {
    return new Promise(async (resolve, reject) => {
      await this.setToken();
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "POST", data });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  // remove data at specific url -- DELETE
  remove = data => {
    return new Promise(async (resolve, reject) => {
      await this.setToken();
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "DELETE", data });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  getArchive = () => {
    return new Promise(async (resolve, reject) => {
      await this.setToken();
      try {
        axios
          .all(
            lists.map(item =>
              axios({
                ...this.axiosConfig,
                method: "GET",
                url: `${process.env.BASE_API_URL}/archive/${item}`
              })
            )
          )
          .then(
            axios.spread(function(...res) {
              let result = {};
              let data = res.map((item, i) => {
                if (!item.data) reject("error occurred");
                result[lists[i]] = normalize(item.data);
              });
              resolve(result);
            })
          );
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = Database;
