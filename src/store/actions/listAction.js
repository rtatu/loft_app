const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const archivePath = "/archive/";

const fetchList = async dispatch => {
  try {
    let data = await new Database().getArchive();
    dispatch({ type: Action.FETCH_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const addToList = async (dispatch, tableName, data) => {
  try {
    let result = await new Database().ref(archivePath + tableName).create(data);
    let payload = {
      tableName,
      data: result.response
    };
    dispatch({ type: Action.ADD_TO_LIST, payload });
    return result.code;
  } catch (error) {
    console.log(error);
  }
};

const updateInList = async (dispatch, tableName, data) => {
  try {
    let result = await new Database().ref(archivePath + tableName).set(data);

    let payload = {
      tableName,
      data: result.response
    };

    dispatch({ type: Action.UPDATE_IN_LIST, payload });
  } catch (error) {
    console.log(error);
  }
};

const removeFromList = async (dispatch, ref, data) => {
  try {
    let result = await new Database().ref(ref).remove(data);
    console.log(result);

    dispatch({ type: Action.REMOVE_FROM_LIST, payload: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchList, addToList, updateInList, removeFromList };
