const Action = require("../actions");

const listReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.ADD_TO_LIST:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.tableName]: {
            ...state.data[payload.tableName],
            [payload.data.id]: payload.data,
          },
        },
      };
    case Action.FETCH_LIST:
      return { loading: false, data: payload };
    case Action.UPDATE_IN_LIST:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.tableName]: {
            ...state.data[payload.tableName],
            [payload.data.id]: payload.data,
          },
        },
      };
    case Action.REMOVE_FROM_LIST:
      return state;
    default:
      return state;
  }
};

module.exports = listReducer;
