const ACTION = require("../actions");
const Auth = require("../../utils/@loftsdk/auth");

const loginToLoft = async (dispatch, email, password) => {
  let data = {};
  try {
    data = await new Auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: ACTION.LOG_IN, payload: data });
    return data;
  } catch (err) {
    return err;
  }
};

const logoutFromLoft = async dispatch => {
  let data = {};
  try {
    data = await new Auth().logout();
    dispatch({ type: ACTION.LOG_OUT });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginToLoft,
  logoutFromLoft
};
