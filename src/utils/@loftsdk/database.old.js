import axios from "axios";
import Storage from "./storageFunction";
import lists from "./links";

const GET_ALL = async token => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .all(
          lists.map(item =>
            axios({
              method: "GET",
              url: `${process.env.BASE_API_URL}/archive/${item}`,
              headers: {
                Authorization: `Bearer ${token}`
              }
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

const GET = (url, token) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      data = await axios({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

const POST = (url, token, data) => {
  return new Promise(async (resolve, reject) => {
    let result;
    try {
      result = await axios({
        method: "POST",
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const PUT = (url, token, data) => {
  return new Promise(async (resolve, reject) => {
    let result;
    try {
      result = await axios({
        method: "PUT",
        url,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const ref = (token, uri) => {
  let url = `${process.env.BASE_API_URL}${uri}`;
  console.log(url);
  return {
    set: data => PUT(url, token, data),
    create: data => POST(url, token, data),
    get: () => GET(url, token),
    getAll: () => GET_ALL(token)
  };
};

const database = () => {
  let token = Storage.getItem("token");

  if (token == null) {
    throw new Error("Not Logged In");
  }

  return {
    ref: url => ref(token, url)
  };
};

export default database;
