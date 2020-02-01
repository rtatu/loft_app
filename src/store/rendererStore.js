import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from "../electron_redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./reducers/listReducer";
import userReducer from "./reducers/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { loginToLoft } from "./actions/userAction";

const initialState = getInitialStateRenderer();
const reducer = combineReducers({ user: userReducer, list: listReducer });
const rendererStore = createStore(
  reducer,
  initialState,
  applyMiddleware(
    forwardToMain, // IMPORTANT! This goes first
    logger,
    thunk
  )
);

replayActionRenderer(rendererStore);

export default rendererStore;
