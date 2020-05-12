const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const formPath = "/maintenance/form";

const fetchFB = async (dispatch) => {
  try {
    let data = await new Database().ref(formPath).get();
    dispatch({ type: Action.FETCH_FB, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const addFB = async (dispatch, data) => {
  try {
    let result = await new Database().ref(formPath).create(data);
    dispatch({ type: Action.ADD_FB, payload: result.response });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateFB = async (dispatch, data) => {
  try {
    let result = await new Database().ref(formPath).set(data);
    dispatch({
      type: Action.UPDATE_FB,
      payload: result.response,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  fetchFB,
  addFB,
  updateFB,
};
