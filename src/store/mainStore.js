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
  }
};

const reducer = combineReducers({
  user: userReducer,
  dm: combineReducers({ list: listReducer })
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
