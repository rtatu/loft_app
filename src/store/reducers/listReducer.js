const Action = require("../actions");
const { object } = require("prop-types");

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
    case Action.ADD_SAFETY_GROUP_TO_TRUCK:
      let safety = state.data.truck[payload.truckId].truckSafeties;
      let empty = Object.keys(safety).length == 0;
      return {
        loading: false,
        data: {
          ...state.data,
          truck: {
            ...state.data.truck,
            [payload.truckId]: {
              ...state.data.truck[payload.truckId],
              truckSafeties: !empty
                ? {
                    ...state.data.truck[payload.truckId].truckSafeties,
                    [payload.groupId]: { safetyGroupId: payload.groupId },
                  }
                : { [payload.groupId]: { safetyGroupId: payload.groupId } },
            },
          },
        },
      };
    case Action.ADD_MULTIPLE_SAFETY_GROUP_TO_TRUCK:
      let ids = {};
      payload.ids.map((id, _) => {
        ids[id] = {
          safetyGroupId: id,
        };
      });
      return {
        loading: false,
        data: {
          ...state.data,
          truck: {
            ...state.data.truck,
            [payload.truckId]: {
              ...state.data.truck[payload.truckId],
              truckSafeties: {...ids},
            },
          },
        },
      };
    default:
      return state;
  }
};

module.exports = listReducer;
