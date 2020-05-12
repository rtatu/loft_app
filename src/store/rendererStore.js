import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer,
} from "../electron_redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./reducers/listReducer";
import userReducer from "./reducers/userReducer";
import poReducer from "./reducers/poReducer";
import formReducer from "./reducers/formReducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = getInitialStateRenderer();
console.log(initialState);
const reducer = combineReducers({
  user: userReducer,
  dm: combineReducers({ list: listReducer }),
  maintenance: combineReducers({ forms: formReducer }),
  purchase_order: poReducer,
});
const rendererStore = createStore(
  reducer,
  initialState,
  applyMiddleware(
    forwardToMain, // IMPORTANT! This goes first
    thunk,
    logger
  )
);

replayActionRenderer(rendererStore);

export default rendererStore;
