const path = require("path");

module.exports = {
  LOADING_WINDOW_PATH: `file://${path.join(
    __dirname,
    "../screens/loading/loading.html"
  )}`,

  MAIN_WINDOW: "http://localhost:8000",

  FORM_WINDOW: "http://localhost:8000/#/form/",

  DATA_MAINTENANCE_WINDOW:
    "http://localhost:8000/#/database-maintenance/list/class"
};
