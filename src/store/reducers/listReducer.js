const Action = require("../actions");

const listReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.SET:
      return {
        ...state,
        [payload.tableName]: {
          ...state[payload.tableName],
          [payload.data.id]: payload.data
        }
      };
    case Action.FETCH:
      return payload;
    default:
      return state;
  }
};

module.exports = listReducer;
