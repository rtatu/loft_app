const ACTION = require("../actions");
const Auth = require("../../utils/@loftsdk/auth");

const loginToLoft = async (dispatch, email, password, rememberMe) => {
  let data = {};
  try {
    data = await new Auth().signInWithEmailAndPassword(
      email,
      password,
      rememberMe
    );
    dispatch({ type: ACTION.LOG_IN, payload: data });
    return data;
  } catch (err) {
    throw err;
  }
};

const logoutFromLoft = async dispatch => {
  try {
    let data = await new Auth().logout();
    dispatch({ type: ACTION.LOG_OUT });
    return data;
  } catch (error) {
    dispatch({ type: ACTION.LOG_OUT });
    throw error;
  }
};

module.exports = {
  loginToLoft,
  logoutFromLoft
};
