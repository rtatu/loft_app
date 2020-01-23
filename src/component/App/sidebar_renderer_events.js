const RoutesEvents = {
  database_maintenance: function(e) {
    e.preventDefault();
    electronRenderer.send("database-maintenance", { name: "DM" });
  }
};

export default RoutesEvents;
