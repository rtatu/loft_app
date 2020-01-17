
export default function getInitialStateRenderer() {
  const getReduxState = electronRemote.getGlobal('getReduxState');
  if (!getReduxState) {
    throw new Error('Could not find reduxState global in main process, did you forget to call replayActionMain?');
  }
  console.log(getReduxState(), 'cehck')
  return JSON.parse(getReduxState() || "{}");
}
