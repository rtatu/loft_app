const Action = require("../actions");
const Database = require("../../utils/@loftsdk/database");

const fetchList = async () => {
  try {
    let data = await new Database().getArchive();
    return { type: Action.FETCH_LIST, payload: data };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchList };
