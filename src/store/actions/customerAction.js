const Action = require("../actions");

const Database = require("../../utils/@loftsdk/database");

const CUSTOMER_CREATE_ACTIONS = {
  customer: Action.ADD_CUSTOMER,
  billing: Action.ADD_CUSTOMER_BILLING_LOCATION,
  contact: Action.ADD_CUSTOMER_CONTACTS,
};

const CUSTOMER_UPDATE_ACTION = {
  customer: Action.UPDATE_CUSTOMER,
  billing: Action.UPDATE_CUSTOMER_BILLING_LOCATION,
  contact: Action.UPDATE_CUSTOMER_CONTACTS,
};

const PATH = {
  customer: "/archive/customer",
  billing: "/archive/billing",
  contact: "/archive/contact",
};

const fetchCustomer = async (dispatch) => {
  try {
    let data = await new Database().ref(PATH["customer"]).get();
    dispatch({ type: Action.FETCH_CUSTOMER, payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createInCustomer = async (dispatch, tableName, data) => {
  try {
    console.log(data, "111");
    let res = await new Database().ref(PATH[tableName]).create(data);
    console.log(res);
    dispatch({
      type: CUSTOMER_CREATE_ACTIONS[tableName],
      payload: {
        data: res.response,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateInCustomer = async (dispatch, tableName, data) => {
  try {
    let res = await new Database().ref(PATH[tableName]).set(data);
    dispatch({ type: CUSTOMER_UPDATE_ACTION[tableName], payload: res });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchCustomer,
  createInCustomer,
  updateInCustomer,
};
