const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const { ipcMain, dialog } = require('electron');
const { createStore, applyMiddleware } = require('redux');

const { forwardToRenderer, triggerAlias, replayActionMain } = require('electron-redux');

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
	// squirrel event handled and app will exit in 1000ms, so don't do anything else
	return;
}

function handleSquirrelEvent(application) {
	if (process.argv.length === 1) {
		return false;
	}

	const ChildProcess = require('child_process');
	const path = require('path');

	const appFolder = path.resolve(process.execPath, '..');
	const rootAtomFolder = path.resolve(appFolder, '..');
	const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
	const exeName = path.basename(process.execPath);

	const spawn = function(command, args) {
		let spawnedProcess, error;

		try {
			spawnedProcess = ChildProcess.spawn(command, args, {
				detached: true
			});
		} catch (error) {}

		return spawnedProcess;
	};

	const spawnUpdate = function(args) {
		return spawn(updateDotExe, args);
	};

	const squirrelEvent = process.argv[1];
	switch (squirrelEvent) {
		case '--squirrel-install':
		case '--squirrel-updated':
			// Optionally do things such as:
			// - Add your .exe to the PATH
			// - Write to the registry for things like file associations and
			//   explorer context menus

			// Install desktop and start menu shortcuts
			spawnUpdate([ '--createShortcut', exeName ]);

			setTimeout(application.quit, 1000);
			return true;

		case '--squirrel-uninstall':
			// Undo anything you did in the --squirrel-install and
			// --squirrel-updated handlers

			// Remove desktop and start menu shortcuts
			spawnUpdate([ '--removeShortcut', exeName ]);

			setTimeout(application.quit, 1000);
			return true;

		case '--squirrel-obsolete':
			// This is called on the outgoing version of your app before
			// we update to the new version - it's the opposite of
			// --squirrel-updated

			application.quit();
			return true;
	}
}
/**
 * store
 */

// const reducer = (state = {}, action) => {
// 	return state
// };

const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_VALUE':
			return { name: 'Rohit Tatu' };

		default:
			return state;
	}
};

const initialState = {
	name: 'Rohit'
};

const store = createStore(
	reducer,
	initialState, // optional
	applyMiddleware(
		triggerAlias, // optional
		forwardToRenderer // IMPORTANT! This goes last
	)
);

console.log(store.getState(), 'check 2133333')

replayActionMain(store);

// store.dispatch({"type" : ""})
store.subscribe(() => console.log(store.getState()))

// creating the main window

let window = {};
function createWindow(width, height, url, windowName) {
	// Create the browser window.
	window[windowName] = new BrowserWindow({
		width,
		height,
		webPreferences: {
			preload: path.join(app.getAppPath(), 'src/preload.js')
			// contextIsolation: true
			// nodeIntegration: true
		}
	});

	window[windowName].setMenuBarVisibility(false);

	// and load the index.html of the app.
	window[windowName].loadURL(url);

	// Emitted when the window is closed.
	window[windowName].on('closed', function() {
		window[windowName] = null;
	});

	require('devtron').install();
}

// app event listners
app.on('ready', () => {
	createWindow(950, 768, 'http://localhost:8000/', 'mainWindow');
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// osx
app.on('activate', function() {
	if (window['mainWindow'] === null) {
		createWindow(1366, 768, 'http://localhost:8000/', 'mainWindow');
	}
});

// ipcMain window creater event listeners

ipcMain.on('database-maintenance', (event, data) => {
	createWindow(1366, 768, 'http://localhost:8000/#/database-maintenance/lists/class', 'dataMaintenanceWindow');
});

ipcMain.on('new-form', (event, data) => {
	let { formName } = data;
	let { editMode } = data;
	let { datastore } = data;
	createWindow(1366, 768, `http://localhost:8000/#/form/${formName}${editMode ? '?editMode' : ''}`, 'formWindow');

	if (editMode) {
		window['formWindow'].webContents.once('did-finish-load', () => {
			window.formWindow.webContents.send('form_edit_mode', {
				data: data.data,
				datastore: datastore
			});
		});
	} else {
		console.log('sending data');

		window['formWindow'].webContents.once('did-finish-load', () => {
			window.formWindow.webContents.send('form_edit_mode', {
				datastore: datastore
			});
		});
	}
});

// ipcMain data exchange event listener

ipcMain.on('form_action', (event, data) => {
	// form action -> archive-context listener -> window["mainWindow"]
	if (window.dataMaintenanceWindow) {
		window.dataMaintenanceWindow.webContents.send('archive_context_listener', data);
	}
});

ipcMain.on('form_action_response', (event, data) => {
	if (window.formWindow) {
		window.formWindow.webContents.send('action_response', data);
	}
});

// data table actions
