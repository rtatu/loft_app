const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const po = "/po/";

const addToPO = () => {};

const fetchPO = async dispatch => {
  try {
    let payload = await new Database().getPO();
    dispatch({ type: Action.FETCH_PO, payload });
  } catch (error) {
    console.log(error);
  }
};

const updateInPO = () => {};

const removeFromPO = () => {};

module.exports = {
  addToPO,
  fetchPO,
  updateInPO,
  removeFromPO
};
