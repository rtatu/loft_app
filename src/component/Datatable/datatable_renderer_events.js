import URL from "../../config/urls";

const DatatableEvents = {
  newForm: function (e, formName, windowName) {
    e.preventDefault();
    electronRenderer.send("create_new_window", {
      url: `${URL.FORM_WINDOW}/${formName}`,
      name: `${windowName}FormWindow`,
      formName,
    });
  },

  editForm: function (formName, windowName, id) {
    electronRenderer.send("create_new_window", {
      url: `${URL.FORM_WINDOW}/${formName}/${id}`,
      name: `${windowName}FormWindow${id}`,
      formName,
      id,
    });
  },

  manageContacts: function (id) {
    electronRenderer.send("create_new_window", {
      url: `${URL.MANAGE_CONTACT_WINDOW}/${id}`,
      name: "manageContact",
      id,
    });
  },

  addNewWindow: function (e, id, truckId) {
    electronRenderer.send("create_new_window", {
      url: `${URL.SAFETY_GROUP}/${id}/${truckId}`,
      name: "safetyGroup",
      id,
      truckId,
    });
  },

  assignSafetyGroups: function (e, id, truckId) {
    if (truckId) {
      electronRenderer.send("create_new_window", {
        url: `${URL.ASSIGN_SAFETY}/truck/${truckId}`,
        name: "assignSafety",
        id,
        truckId,
      });
    } else {
      electronRenderer.send("create_new_window", {
        url: `${URL.ASSIGN_SAFETY}/${id}/${truckId}`,
        name: "assignSafety",
        id,
        truckId,
      });
    }
  },
};

export default DatatableEvents;
