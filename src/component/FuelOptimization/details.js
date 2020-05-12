import React from "react";
import "./details.sass";
import { Stack, Grid } from "../General/Grid";
import LocationSearch from "./Location";
import UploadField from "../General/FileUpload";
import DetailsInput, { DetailsInputWithUnit } from "./DetailsInput";
import close from "../../static/icon/svg/delete.svg";
import AddDestination from "./addDest";

const gridStyle = {
  gridGap: "10px"
};

const FuelOpDetailsJSX = props => (
  <div className="fo-details" style={{display : props.hide ? "none" : "block"}}>
    <Stack style={gridStyle}>
      {/* places */}
      <Stack style={{ gridGap: "10px", marginBottom: "20px" }}>
        <LocationSearch
          label="Source"
          name="source"
          handleChange={props.handleLocationChange}
          initialValue={props.inputData["source"]["label"]}
        />
        {props.inputData.via.map((stop, index) => (
          <LocationSearch
            key={index}
            label="Via"
            close={close}
            index={index}
            onClose={props.removeVia}
            handleChange={props.handleLocationChange}
            name="via"
            initialValue={props.inputData["via"][index]["label"]}
          />
        ))}
        <LocationSearch
          label="Destination"
          name="destination"
          handleChange={props.handleLocationChange}
          initialValue={props.inputData["destination"]["label"]}
        />
        <AddDestination onAdd={props.addVia} />
      </Stack>

      {/* input details */}
      <Grid style={gridStyle}>
        <DetailsInputWithUnit
          label="OffRoad Distance"
          name="offRoadDistance"
          type="number"
          unit={"DISTANCE"}
          value={props.inputData["offRoadDistance"]}
          handleChange={props.handleChange}
        />

        <DetailsInputWithUnit
          label="Fuel Tank Capacity"
          name="tankCapacity"
          type="number"
          value={props.inputData["tankCapacity"]}
          handleChange={props.handleChange}
        />
        <DetailsInputWithUnit
          label="Truck Average"
          name="truckAverage"
          type="number"
          value={props.inputData["truckAverage"]}
          handleChange={props.handleChange}
          unit={"AVERAGE"}
        />
        <DetailsInputWithUnit
          label="Initial Fuel"
          name="initFuel"
          type="number"
          value={props.inputData["initFuel"]}
          handleChange={props.handleChange}
        />
        <DetailsInputWithUnit
          label="Reserve"
          name="reserve"
          type="number"
          value={props.inputData["reserve"]}
          handleChange={props.handleChange}
        />
      </Grid>

      {/* gas statation data */}

      <div>
        <label style={{ marginBottom: "5px" }}>Canada Gas Station Price List</label>
        <UploadField pushData={props.pushData} />
      </div>
      <div>
        <label style={{ marginBottom: "5px" }}>US Gas Station Price List</label>
        <UploadField pushData={props.pushData} usa={true}/>
      </div>
    </Stack>
    <div className="fuel-op-button">
      <button className="optimize-route" onClick={props.optimizedRoute}>
        Optimize Route
      </button>
    </div>
  </div>
);

class FuelOpDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "",
      destination: "",
      via: [],
      offRoadDistance: "5",
      tankCapacity: "1000",
      truckAverage: "4",
      initFuel: "100",
      fuelRateList: "",
      reserve: "",
      pricelist: [],
      usa: "",
      canada: "",
    };
  }

  /**
   * two function for `updating the function cause
   * location component doesnt need event arg
   */
  handleLocationChange = (val, name, index) => {
    // index in case of via
    if (name == "via" && index != undefined && index != null) {
      let via = [...this.state.via];
      via[index] = val ? val : "";
      this.setState({ via });
    } else {
      this.setState({ [name]: val ? val : "" });
    }
  };

  handlePriceList = (data, usa) => {
    if(usa) {
      this.setState({usa : data}, () => {
        let pricelist = [...this.state.usa, ...this.state.canada];
        this.setState({pricelist}, () => console.log(this.state));
      })
    } else {
      this.setState({canada : data}, () => {
        let pricelist = [...this.state.usa, ...this.state.canada];
        this.setState({pricelist}, () => console.log(this.state));
      })
    }
  };

  // update state for rest of the component
  handleChange = (val, name) => {
    this.setState({ [name]: val });
  };

  // add via route
  addVia = () => {
    let via = [...this.state.via];
    via.push("");
    this.setState({ via });
  };

  // remove via route
  removeVia = index => {
    let via = [...this.state.via];

    via.splice(index, 1);

    this.setState({ via });
  };

  // optimized route function

  optimizedRoute = () => {
    this.props.handleDirection({ ...this.state });
  };

  render() {
    return (
      <FuelOpDetailsJSX
        addVia={this.addVia}
        removeVia={this.removeVia}
        inputData={{ ...this.state }}
        handleLocationChange={this.handleLocationChange}
        handleChange={this.handleChange}
        optimizedRoute={this.optimizedRoute}
        pushData={this.handlePriceList}
        hide={this.props.hide}
      />
    );
  }
}

export default FuelOpDetails;
