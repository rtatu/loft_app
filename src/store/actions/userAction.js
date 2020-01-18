/**
 * Action List
 * 1. get Access Token if it is stored in credential manager
 * 2. FETCH_ALL_LIST -> initial FETCH
 */

const Authentication = require("../../services/authentication");
const Action = require("../actions");

const getToken = async dispatch => {
  let token = await Authentication.getAccessToken();
  dispatch({ type: Action.TOKEN, payload: token });
};

const initFetch = async dispatch => {
  let data;
  dispatch({ type: Action.FETCH, payload: data });
};

module.exports = {
  getToken,
  initFetch
};
