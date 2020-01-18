import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from "../electron_redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./reducers/listReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const initialState = getInitialStateRenderer();
const reducer = combineReducers({ user: userReducer, data: listReducer });
const rendererStore = createStore(
  reducer,
  initialState,
  applyMiddleware(
    forwardToMain, // IMPORTANT! This goes first
    thunk
  )
);

replayActionRenderer(rendererStore);

export default rendererStore;
