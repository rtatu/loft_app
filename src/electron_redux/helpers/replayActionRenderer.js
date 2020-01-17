"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = replayActionRenderer;

function replayActionRenderer(store) {
  electronRenderer.on("redux-action", function (event, payload) {
    store.dispatch(payload);
  });
}