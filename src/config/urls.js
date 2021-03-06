const path = require("path");

const BASE = `file://${path.join(__dirname, "../../build/index.html")}`;

const DEV_URLS = {
  LOADING_WINDOW_PATH: `file://${path.join(
    __dirname,
    "../screens/loading/loading.html"
  )}`,

  MAIN_WINDOW: "http://localhost:8000",

  FORM_WINDOW: "http://localhost:8000/#/form",

  DATA_MAINTENANCE_WINDOW:
    "http://localhost:8000/#/database-maintenance/lists/class",
  PURCHASE_ORDER_WINDOW: "http://localhost:8000/#/po",
  MANAGE_CONTACT_WINDOW: "http://localhost:8000/#/manage-contact",
  SAFETY_GROUP: "http://localhost:8000/#/safety-group",
  ASSIGN_SAFETY: "http://localhost:8000/#/assign-safety"
};

const DIST_URLS = {
  LOADING_WINDOW_PATH: `file://${path.join(
    __dirname,
    "../screens/loading/loading.html"
  )}`,

  MAIN_WINDOW: BASE,

  FORM_WINDOW: `${BASE}#/form`,

  DATA_MAINTENANCE_WINDOW: `${BASE}#/database-maintenance/lists`,
  PURCHASE_ORDER_WINDOW: `${BASE}#/po`,
  MANAGE_CONTACT_WINDOW: `${BASE}#/manage-contact`,
  SAFETY_GROUP: `${BASE}#/safety-group`,
  ASSIGN_SAFETY: `${BASE}#/assign-safety`
};

module.exports = DEV_URLS;
