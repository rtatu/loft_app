import React from "react";
import fetchList, { add } from "../utils/api_funtions";

// creating context
const ArchiveContext = React.createContext();

// convert an array to obj
/**
 * @param {keyName} keyName by which obj is created
 * @explanation -> [{id: 2, name:"Rohit Tatu"}]
 * @return -> array.toObj('id') -> {2 : {id: 2, name : "Rohit Tatu"}}
 */
Array.prototype.toObj = function(keyName) {
  let tempObj = {};

  for (let item of this) {
    tempObj[item[keyName]] = item;
  }

  return tempObj;
};

// creating provider

class ArchiveProvider extends React.Component {
  // define the state

  constructor(props) {
    super(props);

    this.state = {
      datastore: {
        lists: {
          data: {
            truck: {},
            class: {},
            location: {},
            department: {},
            driver: {},
            payterm: {},
            service: {},
            subsidiary: {}
          },
          fetching: false,
          error: false
        }
      }
    };
  }

  componentDidMount() {
    // fetch all the lists

    // return 0

    fetchList()
      .then(res => this.filterData(res))
      .then(data => {
        let tempState = { ...this.state };

        for (let key of Object.keys(tempState.datastore.lists.data)) {
          tempState.datastore.lists.data[key] = data[key];
        }

        tempState.datastore.lists.fetching = false;

        this.setState({ ...tempState }, () => console.log(this.state));
      });

    // add event listeners for electron windows
    electronRenderer.on("archive_context_listener", (e, data) => {
      const { name, path, bag, tableName } = data;
      switch (name) {
        case "POST_DATA":
          this.addToStore(tableName, bag);
          break;
        default:
          break;
      }
    });
  }

  // filter the data
  filterData = data_array => {
    let keys = Object.keys(data_array);

    let filteredData = {};

    for (let key of keys) {
      filteredData[key] = data_array[key].data
        ? data_array[key].data.toObj("id")
        : {};
    }

    return filteredData;
  };

  /* actions */
  /* add to data store */
  /**
   * @params {path, data}
   * @return {true -> on added, ErrorMessage -> on errorMessage}
   */
  addToStore = async (tableName, bag) => {
    // path to route will be -> http://localhost:3000/archive/${tableName}

    let result = await add(tableName, bag).catch(err => console.log(err));
    if (result) {
      result = { [result.data.response.id]: result.data.response };
      let tempState = { ...this.state };
      tempState.datastore.lists.data[tableName] = {
        ...tempState.datastore.lists.data[tableName],
        ...result
      };

      this.setState({ ...tempState }, () => console.log(this.state));
    }
  };

  // remove from data store
  /**
   * @param {path, id}
   * @return {true, ErrorMessage}
   */
  removefromStore = (path, id) => {
    console.log("removed");
  };

  // update in data store
  /**
   * @param {path, id, data}
   * @return {true, ErrorMessage}
   */
  updateInStore = (path, id, data) => {
    console.log("updated");
  };

  render() {
    return (
      <ArchiveContext.Provider
        value={{
          datastore: this.state.datastore,
          addToStore: this.addToStore,
          removefromStore: this.removefromStore,
          updateInStore: this.updateInStore
        }}
      >
        {this.props.children}
      </ArchiveContext.Provider>
    );
  }
}

export default ArchiveProvider;
export { ArchiveContext };
