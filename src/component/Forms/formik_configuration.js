const config = {
  mapPropsToValues: props => {
    const values = {};
    const formHeader = props.formheader[props.formName];
    const headerKeys = Object.keys(formHeader);
    const editdata = props.data || {};
    console.log(editdata);

    for (let key of headerKeys) {
      // alteredKEy -> General = general
      let alteredKey = key
        .split(" ")
        .map((item, index) => (index == 0 ? item.toLocaleLowerCase() : item))
        .join("");

      if (Array.isArray(formHeader[key])) {
        for (let obj of formHeader[key]) {
          values[key] = { ...values[key] };

          // special case for province and postal code
          if (
            alteredKey == "address" &&
            (obj.name == "state_province" || obj.name == "postal_zip")
          ) {
            let slicedKey = obj.name.split("_");
            values[`${key}`][`${obj.name}`] =
              editdata[alteredKey] != null || editdata[alteredKey] != undefined
                ? editdata[alteredKey][slicedKey[0]] ||
                  editdata[alteredKey][slicedKey[1]]
                : "";
          } else {
            values[`${key}`][`${obj.name}`] =
              alteredKey != "general" &&
              (editdata[alteredKey] != null ||
                editdata[alteredKey] != undefined)
                ? editdata[alteredKey][obj.name] || obj.defaultValue || ""
                : editdata[obj.name] || obj.defaultValue || "";
          }
        }
      } else {
        values[key] =
          editdata[formHeader[key]["name"]] || formHeader[key]["defaultValue"];
      }
    }

    // reutrn the mapping of propsToValue
    console.log(values, "after mapping");
    return values;
  },
  validate: (values, formikBag) => {
    // validate values
    return {};
  },
  validateOnBlur: true,

  handleSubmit: (values, formikBag) => {
    // handle submittion of the form
    console.log(values);

    // data ready to send
    let keys = Object.keys(values);
    let bag = {};

    keys.map(item => {
      // convert the item to desiredFormat
      let convertedKey = item
        .split(" ")
        .map((item, index) => (index == 0 ? item.toLocaleLowerCase() : item))
        .join("");

      if (convertedKey == "general") {
        bag = { ...bag, ...values[item] };
      } else {
        bag[convertedKey] = values[item];
      }
    });

    if (bag["address"]) {
      bag["address"]["country"] == "CANADA"
        ? (bag["address"]["province"] = bag["address"]["state_province"])
        : (bag["address"]["state"] = bag["address"]["state_province"]);
    }

    if (bag["address"]) {
      bag["address"]["country"] == "CANADA"
        ? (bag["address"]["postal"] = bag["address"]["state_province"])
        : (bag["address"]["zip"] = bag["address"]["state_province"]);
    }

    // electronRenderer.send("form_action", {
    //   name: "POST_DATA",
    //   path: "datastore.lists.data.class",
    //   tableName: formikBag.props.formName,
    //   bag
    // });

    // electronRenderer.on("action_response", (event, data) => {
    //   if (data == 1) {
    //     electronRemote.getCurrentWindow().close();
    //   } else {
    //     console.log("errror");
    //   }
    // });

    // upload data
  }
};

export default config;
