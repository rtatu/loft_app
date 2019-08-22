const { ipcMain, BrowserWindow } = require("electron");
const createWindow = require("./windows");

ipcMain.on("database-maintenance", (event, data) => {
  // console.log(data)
  let dataMaintenanceWindow = createWindow(
    1366,
    768,
    "http://localhost:8000/#/database-maintenance/lists/class"
  );
});

ipcMain.on("new-form", (event, data) => {
  let { formName } = data;
  let formWindow = createWindow(
    1366,
    768,
    `http://localhost:8000/#/form/${formName}`
  );
});
{
  /* <Route path="/database-maintenance/lists" component={DataMaintenance}/> */
}
