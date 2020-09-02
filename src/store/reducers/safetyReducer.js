const Action = require("../actions");

const safetyReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.FETCH_SAFETY:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case Action.ADD_SAFETY:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [payload.id]: payload,
        },
      };
    case Action.UPDATE_SAFETY:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [payload.id]: {
            ...state.data[payload.id],
            ...payload,
          },
        },
      };
    case Action.FETCH_SAFETY_GROUP:
      return {
        ...state,
        groupsloading: false,
        groups: payload,
      };
    case Action.ADD_SAFETY_GROUP:
      return {
        ...state,
        groupsloading: false,
        groups: {
          ...state.groups,
          ...payload,
        },
      };
      case Action.UPDATE_SAFETY_GROUP:
        return {
          ...state,
          groupsloading: false,
          groups: {
            ...state.groups,
            ...payload,
          },
        };
    default:
      return state;
  }
};

module.exports = safetyReducer;
