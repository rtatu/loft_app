const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const archivePath = "/archive/";

const fetchList = async (dispatch) => {
  try {
    let data = await new Database().getArchive();
    dispatch({ type: Action.FETCH_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const addToList = async (dispatch, tableName, data) => {
  try {
    let arr =
      tableName == "itemPricing" ? FormatDataForPricing(data, true) : data;
    let result = await new Database().ref(archivePath + tableName).create(arr);
    let payload = {
      tableName,
      data: result.response,
    };
    dispatch({ type: Action.ADD_TO_LIST, payload });
    return result.code;
  } catch (error) {
    console.log(error);
  }
};

const updateInList = async (dispatch, tableName, data) => {
  try {
    let arr = tableName == "itemPricing" ? FormatDataForPricing(data) : data;
    let result = await new Database().ref(archivePath + tableName).set(arr);
    let payload = {
      tableName,
      data: result.response,
    };
    dispatch({ type: Action.UPDATE_IN_LIST, payload });
  } catch (error) {
    console.log(error);
  }
};

const removeFromList = async (dispatch, ref, data) => {
  try {
    let result = await new Database().ref(ref).remove(data);
    console.log(result);

    dispatch({ type: Action.REMOVE_FROM_LIST, payload: result });
  } catch (error) {
    console.log(error);
  }
};

const updateOdometer = async (dispatch, tableName, data) => {
  try {
    let result = await new Database()
      .ref(archivePath + tableName + "/updateOdometer")
      .set(data);
    let payload = {
      tableName,
      data: result.response,
    };
    dispatch({ type: Action.UPDATE_IN_LIST, payload });
  } catch (err) {
    console.log(err);
  }
};

const addSafetyGroupsToTrucks = async (dispatch, data) => {
  try {
    await new Database().ref(archivePath + "truck" + "/linkGroups").create(data);
    let payload = {
      truckId: data.truckId,
      ids: data.ids,
    };
    dispatch({ type: Action.ADD_MULTIPLE_SAFETY_GROUP_TO_TRUCK, payload });
    return true;
  } catch (err) {
    console.log(err);
  }
};

const FormatDataForPricing = (data, add = false) => {
  for (let key in data.warranty) {
    data[key] = data.warranty[key];
  }
  data.itemId = data.itemTitleId;
  data.vendorId = data.vendorNameId;
  if (data.warrantyAvailable == "NO") {
    delete data.warrantyProvider;
    delete data.period;
    delete data.periodUnit;
    delete data.mileage;
    delete data.mileageUnit;
  }
  delete data.itemTitleId;
  delete data.vendorNameId;

  delete data.warranty;

  let arr = [];
  arr.push(data);
  return add ? arr : data;
};

module.exports = {
  fetchList,
  addToList,
  updateInList,
  removeFromList,
  updateOdometer,
  addSafetyGroupsToTrucks
};
