
export default function replayActionRenderer(store) {
  electronRenderer.on('redux-action', (event, payload) => {
    store.dispatch(payload);
  });
}
