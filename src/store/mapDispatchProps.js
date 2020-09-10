const {
  addToList,
  updateInList,
  updateOdometer,
} = require("./actions/listAction");
const {
  createInCustomer,
  fetchCustomer,
  updateInCustomer,
} = require("./actions/customerAction");

const {
  addSafety,
  fetchSafety,
  updateSafety,
} = require("./actions/safetyAction");

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
    case "safetyAndCompliance":
      return {
        add: (data) => dispatch((dispatch) => addSafety(dispatch, data)),
        initFetch: () => dispatch(fetchSafety),
        update: (data) => dispatch((dispatch) => updateSafety(dispatch, data)),
      };
    case "truckOdometer":
      return {
        update: (data) =>
          dispatch((dispatch) => updateOdometer(dispatch, 'truck', data)),
      };
    default:
      return {};
  }
};

module.exports = getActionForDispatch;
