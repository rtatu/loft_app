const axios = require("axios").default;
const Storage = require("./storageFunction");
const lists = require("./links");

class Database {
  constructor() {
    // get token from keytar
    this.currentUser = Storage().get();

    if (!this.currentUser) throw new Error("user is not logged in!");

    this.token = this.currentUser.token;

    // set axios config -- add token
    this.axiosConfig = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };

    // debug -- will be removed
    console.log(this.currentUser, this.token);
  }

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
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "GET" });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  // set data at specific url -- PUT
  set = data => {
    return new Promise(async (resolve, reject) => {
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "PUT", data });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  // create data at specific url -- POST
  create = data => {
    return new Promise(async (resolve, reject) => {
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "POST", data });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  // remove data at specific url -- DELETE
  remove = data => {
    return new Promise(async (resolve, reject) => {
      let result;
      try {
        result = await axios({ ...this.axiosConfig, method: "DELETE", data });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  getArchive = () => {
    return new Promise((resolve, reject) => {
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
                result[lists[i]] = item;
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
