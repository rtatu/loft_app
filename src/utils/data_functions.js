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

function checkDisable(
  disabledProperties,
  values,
  expectedValues = null,
  disabled
) {
  let tempdisabled = false;
  if (disabled) return true;
  if (!disabledProperties) return false;
  disabledProperties.forEach((item, i) => {
    if (values[item] == (expectedValues ? expectedValues[i] : "")) {
      tempdisabled = true;
    }
  });
  return tempdisabled;
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
function formatDate(date){
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}


export default get_In;
export { checkDisable, showOn, retreiveDatastoreData,formatDate };
