const Action = require("../actions");

const customerReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case Action.FETCH_CUSTOMER:
      return {
        data: {
          customer: payload,
        },
        loading: false,
      };

    case Action.ADD_CUSTOMER:
      return {
        loading: false,
        data: {
          customer: {
            ...state.data.customer,
            [payload.data.id]: payload.data,
          },
        },
      };

    default:
      return state;
  }
};

module.exports = customerReducer;
