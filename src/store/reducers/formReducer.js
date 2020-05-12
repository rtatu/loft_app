const Action = require("../actions");

const formReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.FETCH_FB:
      return {
        loading: false,
        data: payload,
      };

    case Action.UPDATE_FB:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.id]: {
            ...state.data[payload.id],
            ...payload,
          },
        },
      };

    case Action.ADD_FB:
      return {
        loading: false,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
      };

    case Action.REMOVE_FB:
      return state;
    default:
      return state;
  }
};

module.exports = formReducer;
