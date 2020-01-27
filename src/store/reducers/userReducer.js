const Action = require("../actions");

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.TOKEN:
      return { ...state, loading: false, ...payload };
    default:
      return state;
  }
};

module.exports = userReducer;
