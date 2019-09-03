const DatatableEvents = {
  formEvent: function(formName, datastore) {
    electronRenderer.send("new-form", { formName, datastore });
  }
};

export default DatatableEvents;
