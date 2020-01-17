"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getInitialStateRenderer;

function getInitialStateRenderer() {
  var getReduxState = electronRemote.getGlobal("getReduxState");

  if (!getReduxState) {
    throw new Error("Could not find reduxState global in main process, did you forget to call replayActionMain?");
  }

  return JSON.parse(getReduxState());
}