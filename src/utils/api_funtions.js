import axios from "axios";

const lists = [
  "class",
  "department",
  "driver",
  "location",
  "payterm",
  "service",
  "subsidiary",
  "truck",
  "contact",
  "customer"
];

// get routes
const fetchList = async () => {
  const data = {};

  try {
    for (let list of lists) {
      data[list] = await get(list).catch(error => {
        return {
          url: error.response.config.url,
          status: error.response.status
        };
      });
    }
  } catch (error) {
    data["error"] = data["error"]
      ? data["error"].push({
          url: error.config.url,
          status: error.response.status
        })
      : [{ url: error.config.url, status: error.response.status }];
  }

  return data;
};

// get routes
function get(route) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${process.env.BASE_API_URL}/archive/${route}`
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

// post routes
function add(route, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${process.env.BASE_API_URL}/archive/${route}`,
      data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err.response));
  });
}

// update routes
function update(route, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${process.env.BASE_API_URL}/archive/${route}`,
      data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err.response));
  });
}

function remove(route, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${process.env.BASE_API_URL}/archive/${route}`,
      data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err.response));
  });
}

export { get, add, update, remove };
export default fetchList;
