const getStoreForState = (store, navigate, tableName, id, nextId) => {
  switch (navigate) {
    case "lists":
      return {
        datastore: store.dm && store.dm[navigate] && store.dm[navigate]["data"],
        data:
          store.dm &&
          store.dm[navigate] &&
          store.dm[navigate]["data"] &&
          store.dm[navigate]["data"][tableName] &&
          store.dm[navigate]["data"][tableName][id],
      };

    case "customers":
      return {
        datastore: store.dm && store.dm[navigate] && store.dm[navigate]["data"],
        data:
          store.dm &&
          store.dm[navigate] &&
          store.dm[navigate]["data"] &&
          tableName != "customer"
            ? store.dm[navigate]["data"]["customer"] &&
              store.dm[navigate]["data"]["customer"][tableName] &&
              store.dm[navigate]["data"]["customer"][id] &&
              store.dm[navigate]["data"]["customer"][id][tableName] &&
              store.dm[navigate]["data"]["customer"][id][tableName][nextId]
            : store.dm[navigate]["data"]["customer"] &&
              store.dm[navigate]["data"]["customer"][id],
        lists: store.dm && store.dm["lists"] && store.dm["lists"]["data"],
      };
    case "safetyAndCompliance":
      return {
        datastore: store.safety,
        data: store.safety.data[id],
      };
    case "truckOdometer":
      let truck = store.dm.lists.data.truck[id];
      let ob = { ...truck.truckOdometer, truckId: truck.id };
      return {
        data: ob,
      };
    default:
      return {};
  }
};

export default getStoreForState;
