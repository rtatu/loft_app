const Action = require("../actions");

const poReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.FETCH_PO:
      return { loading: false, data: payload };
    case Action.ADD_TO_PO:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.tableName]: {
            ...state.data[payload.tableName],
            [payload.data.id]: payload.data
          }
        }
      };
    case Action.UPDATE_IN_PO:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.tableName]: {
            ...state.data[payload.tableName],
            [payload.data.id]: payload.data
          }
        }
      };
    case Action.REMOVE_FROM_PO:
      return state; // implement it as per need
    default:
      return state;
  }
};

module.exports = poReducer;
