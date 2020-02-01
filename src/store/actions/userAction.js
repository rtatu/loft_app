const ACTION = require("../actions");
const Auth = require("../../utils/@loftsdk/auth");

const loginToLoft = (email, password) => {
  return async dispatch => {
    let data = {};
    try {
      data = await new Auth().signInWithEmailAndPassword(email, password);
      console.log(data);
      dispatch({ type: ACTION.LOG_IN, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
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
