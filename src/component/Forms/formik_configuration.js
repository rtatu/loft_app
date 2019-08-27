const config = {
  mapPropsToValues: props => {
    // props -> formName
    console.log(props);
    const values = {};
    const formHeader = props.formheader[props.formName];
    const headerKeys = Object.keys(formHeader);
    const editdata = props.data || {};

    for (let key of headerKeys) {
      // alteredKEy
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
      }
    }

    console.log("values", values);
    // reutrn the mapping of propsToValue
    return values;
  },
  validate: (values, formikBag) => {
    // validate values
    return {};
  },
  validateOnBlur: true,

  handleSubmit: (values, formikBag) => {
    // handle submittion of the form

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

    electronRenderer.send("form_action", {
      name: "POST_DATA",
      path: "datastore.lists.data.class",
      tableName: formikBag.props.formName,
      bag
    });
  }
};

export default config;
