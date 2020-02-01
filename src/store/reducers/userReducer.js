const ACTION = require("../actions");

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTION.LOG_IN:
      console.log(payload, "reducers");
      return { ...state, loading: false, ...payload };
    case ACTION.LOG_OUT:
      return { loading: false, data: null, token: null };
    default:
      return state;
  }
};

module.exports = userReducer;
