const { forwardToMainWithParams, forwardToMain } = require('./middleware/forwardToMain');
const forwardToRenderer = require('./middleware/forwardToRenderer');
const triggerAlias = require('./middleware/triggerAlias');
const createAliasedAction = require('./helpers/createAliasedAction');
const replayActionMain = require('./helpers/replayActionMain');
const replayActionRenderer = require('./helpers/replayActionRenderer');
const getInitialStateRenderer = require('./helpers/getInitialStateRenderer');

module.exports = {
	forwardToMain,
	forwardToMainWithParams,
	forwardToRenderer,
	triggerAlias,
	createAliasedAction,
	replayActionMain,
	replayActionRenderer,
	getInitialStateRenderer
};
