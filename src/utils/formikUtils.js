function getValueFromData(data, input, key) {
  let value;
  if (key) {
    value = (data[key] && data[key][input.name]) || input.defaultValue || "";
  } else {
    value = data[input.name] || input.defaultValue || "";
  }

  if (typeof value === "object" && value != null && input.autofillProp) {
    return value[input.autofillProp];
  } else {
    return value;
  }
}

const mapPropsToValueCombinedWithEdit = (formHeader, data) => {
  let values = {};
  let headerKeys = Object.keys(formHeader);

  for (let key of headerKeys) {
    let tab = formHeader[key]; // block
    let alteredKey = key.lowerCaseFirstLetter();
    if (Array.isArray(tab)) {
      for (let input of tab) {
        values[key] = { ...values[key] };
        if (input.name == "state_province") {
          values[key][input.name] =
            data["province"] || data["state"] || input.defaultValue || "";
          continue;
        }

        if (input.name == "postal_zip") {
          values[key][input.name] =
            data["zipCode"] || data["postalCode"] || input.defaultValue || "";
          continue;
        }

        if (alteredKey == "general") {
          values[key][input.name] = getValueFromData(data, input);
          continue;
        }

        values[key][input.name] = getValueFromData(data, input, alteredKey);
      }
    } else {
      values[key] = data[alteredKey] || tab.defaultValue || "";
    }
  }

  return values;
};

function mapValuesToData(values) {
  let tabs = Object.keys(values);
  let data = {};

  for (let tab of tabs) {
    let alteredKey = tab.lowerCaseFirstLetter();
    let tabData = values[tab];
    for (let inputName in tabData) {
      let inputValue = tabData[inputName];

      if (inputValue == "") continue;

      if (alteredKey == "general") {
        data[inputName] = inputValue;
        continue;
      }

      data[alteredKey] = { ...data[alteredKey] };

      if (inputName == "state_province" && alteredKey == "address") {
        data[alteredKey][
          tabData["country"] == "CANADA" ? "province" : "state"
        ] = inputValue;
        continue;
      }

      if (inputName == "postal_zip" && alteredKey == "address") {
        data[alteredKey][
          tabData["country"] == "CANADA" ? "zipCode" : "postalCode"
        ] = inputValue;
        continue;
      }

      data[alteredKey][inputName] = inputValue;
    }
  }

  return data;
}

export default {
  mapPropsToValueCombinedWithEdit,
  mapValuesToData
};
