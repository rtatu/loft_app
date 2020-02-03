import URL from "../../config/urls";

const RoutesEvents = {
  database_maintenance: function(e) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: URL.DATA_MAINTENANCE_WINDOW,
      name: "dataMaintenance"
    });
  }
};

export default RoutesEvents;
