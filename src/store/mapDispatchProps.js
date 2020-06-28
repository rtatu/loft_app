const { addToList, updateInList } = require("./actions/listAction");
const {
  createInCustomer,
  fetchCustomer,
  updateInCustomer,
} = require("./actions/customerAction");

const getActionForDispatch = (dispatch, navigate, tableName) => {
  switch (navigate) {
    case "lists":
      return {
        add: (data) =>
          dispatch((dispatch) => addToList(dispatch, tableName, data)),
        initFetch: () => dispatch(() => null),
        update: (data) =>
          dispatch((dispatch) => updateInList(dispatch, tableName, data)),
      };
    case "customers":
      return {
        add: (data) =>
          dispatch((dispatch) => createInCustomer(dispatch, tableName, data)),
        initFetch: () => dispatch(fetchCustomer),
        update: (data) =>
          dispatch((dispatch) => updateInCustomer(dispatch, tableName, data)),
      };
    default:
      return {};
  }
};

module.exports = getActionForDispatch;
