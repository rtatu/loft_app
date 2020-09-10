const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");
const normalize = require("../../utils/@loftsdk/normalize");

const formPath = "/safety";
const safetyGroupPath = "/safetygroup";

const fetchSafety = async (dispatch) => {
  try {
    let data = await new Database().ref(formPath).get();
    dispatch({ type: Action.FETCH_SAFETY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const fetchSafetyGroups = async (dispatch) => {
  try {
    let data = await new Database().ref(safetyGroupPath).get();
    dispatch({ type: Action.FETCH_SAFETY_GROUP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const addSafety = async (dispatch, data) => {
  try {
    let result = await new Database().ref(formPath).create(data);
    dispatch({ type: Action.ADD_SAFETY, payload: result.response });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const addSafetyGroup = async (dispatch, data) => {
  try {
    let result = await new Database().ref(safetyGroupPath).create(data);
    let res = normalize(result.response);
    dispatch({ type: Action.ADD_SAFETY_GROUP, payload: res });
    if (data.truckId) {
      let groupId = Object.keys(res)[0]
      dispatch({
        type: Action.ADD_SAFETY_GROUP_TO_TRUCK,
        payload: { truckId: data.truckId, groupId },
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateSafety = async (dispatch, data) => {
  try {
    let result = await new Database().ref(formPath).set(data);
    dispatch({
      type: Action.UPDATE_SAFETY,
      payload: result.response,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateSafetyGroup = async (dispatch, data) => {
  try {
    let result = await new Database().ref(safetyGroupPath).set(data);
    dispatch({
      type: Action.UPDATE_SAFETY_GROUP,
      payload: normalize(result.response),
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  fetchSafety,
  addSafety,
  updateSafety,
  fetchSafetyGroups,
  addSafetyGroup,
  updateSafetyGroup,
};
