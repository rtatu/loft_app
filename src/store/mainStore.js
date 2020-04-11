const {
  forwardToRenderer,
  replayActionMain,
  triggerAlias
} = require("../electron_redux/index.electron");

const { createStore, combineReducers, applyMiddleware } = require("redux");

const thunk = require("redux-thunk").default;

const LIST_ACTION = require("./actions/listAction");
const ACTION = require("./actions");

// import reducer
const userReducer = require("./reducers/userReducer");
const listReducer = require("./reducers/listReducer");
const poReducer = require("./reducers/poReducer");

const initialState = {
  user: {
    data: null,
    token: null,
    loading: true
  },
  dm: {
    list: {
      loading: true,
      data: null
    }
  },
  purchase_order: {
    data: {
      inventory: null,
      issues: null,
      po: null
    },
    loading: true
  }
};

const reducer = combineReducers({
  user: userReducer,
  dm: combineReducers({ list: listReducer }),
  purchase_order: poReducer
});

const mainStore = createStore(
  reducer,
  initialState,
  applyMiddleware(
    thunk,
    triggerAlias, // optional
    forwardToRenderer // IMPORTANT! This goes last
  )
);

replayActionMain(mainStore);

// mainStore.dispatch(LIST_ACTION.FETCH_LISTS);

// mainStore.subscribe(() => console.log(mainStore.getState()));

module.exports = mainStore;
