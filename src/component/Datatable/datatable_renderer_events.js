const DatatableEvents = {
  formEvent: function(formName) {
    electronRenderer.send("new-form", { formName });
  }
};

export default DatatableEvents;
