function get_In(data, str) {
  let p = str.split(".");
  let temp_data = data;

  for (let entity of p) {
    if (temp_data) {
      temp_data = temp_data[entity];
    }
  }
  return temp_data;
}

function retreiveDatastoreData(item, datastore, values) {
  if (item.readOnly) return item.data;

  if (item.autoprop) return get_In({ datastore: datastore }, item.autoprop);

  if (item.conditionAutoProp) {
    let name = item.conditionAutoProp.dependOn;
    let condition = item.conditionAutoProp.condition;
    return get_In({ datastore: datastore }, condition[values[name]] || "");
  }
}

function checkDisable(disabledProperties, values) {
  let disabled = false;
  if (!disabledProperties) return false;
  disabledProperties.forEach((item) => {
    if (values[item] == "") {
      disabled = true;
    }
  });
  return disabled;
}

function showOn(showOnProperties, values) {
  let show = false;
  if (!showOnProperties) return true;

  showOnProperties.forEach((item) => {
    if (values[item.name] == item.value) {
      show = true;
    }
  });

  return show;
}

export default get_In;
export { checkDisable, showOn, retreiveDatastoreData };
