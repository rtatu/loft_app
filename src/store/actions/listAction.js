const axios = require("axios").default;
const Action = require("../actions");

const ADD_TO_LIST = () => {};

const UPDATE_TO_LIST = () => {};

const FETCH_LISTS = async dispatch => {
  let data = await axios({
    method: "get",
    url: "https://reqres.in/api/users?page=2"
  });

  dispatch({ type: Action.FETCH, payload: data.data });
};

module.exports = { FETCH_LISTS, ADD_TO_LIST, UPDATE_TO_LIST };
