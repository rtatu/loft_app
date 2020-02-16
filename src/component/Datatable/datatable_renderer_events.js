import URL from "../../config/urls";

const DatatableEvents = {
  newForm: function(e, formName) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: `${URL.FORM_WINDOW}/${formName}`,
      name: "formWindow"
    });
  }
};

export default DatatableEvents;
