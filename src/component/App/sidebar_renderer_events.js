import URL from "../../config/urls";

const RoutesEvents = {
  database_maintenance: function(e) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: URL.DATA_MAINTENANCE_WINDOW,
      name: "dataMaintenance"
    });
  },
  po: function(e) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: URL.PURCHASE_ORDER_WINDOW,
      name: "purchaseOrder"
    });
  }
};

export default RoutesEvents;
