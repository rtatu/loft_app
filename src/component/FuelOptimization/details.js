import React from "react";
import "./details.sass";
import { Stack, Grid } from "../General/grid";
import LocationSearch from "./Location";
import UploadField from "../General/FileUpload";
import DetailsInput from "./DetailsInput";
import close from "../../static/icon/svg/delete.svg"
import AddDestination from "./addDest";



const gridStyle = {
  gridGap: '10px'
}

const FuelOpDetailsJSX = (props) => (
  <div className="fo-details">
    <Stack style={gridStyle}>

      {/* places */}
      <Stack style={{ gridGap: '10px', marginBottom: '20px' }}>
        <LocationSearch label="Source" name="source" handleChange={props.handleLocationChange} initialValue={props.inputData["source"]["label"]} />
        {
          props.inputData.via.map((stop, index) =>
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
          )
        }
        <LocationSearch label="Destination" name="destination" handleChange={props.handleLocationChange} initialValue={props.inputData["destination"]["label"]} />
        <AddDestination onAdd={props.addVia} />
      </Stack>

      {/* input details */}
      <Grid style={gridStyle}>
        <DetailsInput
          label="OffRoad Distance"
          name="offRoadDistance"
          type="number"
          value={props.inputData["offRoadDistance"]} handleChange={props.handleChange} />
        <DetailsInput
          label="Fuel Tank Capacity"
          name="tankCapacity"
          type="number"
          value={props.inputData["tankCapacity"]} handleChange={props.handleChange} />
        <DetailsInput
          label="Truck Average"
          name="truckAverage"
          type="number"
          value={props.inputData["truckAverage"]} handleChange={props.handleChange} />
        <DetailsInput
          label="Initial Fuel"
          name="initFuel"
          type="number"
          value={props.inputData["initFuel"]} handleChange={props.handleChange} />
        <DetailsInput
          label="Reserve"
          name="reserve"
          type="number"
          value={props.inputData["reserve"]} handleChange={props.handleChange} />
      </Grid>

      {/* gas statation data */}

      <div>
        <label style={{ marginBottom: '5px' }}>Gas Station Data</label>
        <UploadField />
      </div>

    </Stack>
    <div className="fuel-op-button">
      <button className="optimize-route" onClick={props.optimizedRoute}>Optimize Route</button>
    </div>
  </div>
);

class FuelOpDetails extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      source: '',
      destination: '',
      via: [],
      offRoadDistance: '',
      tankCapacity: '',
      truckAverage: '',
      initFuel: '',
      fuelRateList: '',
      reserve: ''
    }
  }

  /**
   * two function for `updating the function cause
   * location component doesnt need event arg
   */
  handleLocationChange = (val, name, index) => {
    // index in case of via
    if (name == "via" && index != undefined && index != null) {
      let via = [...this.state.via];
      via[index] = (val) ? val : "";
      this.setState({ via })
    } else {
      this.setState({ [name]: (val) ? val : "" }, () => console.log(this.state))
    }
  }

  // update state for rest of the component
  handleChange = (e, name) => {
    let val = e.target.value
    // validations
    /**
     * 1. value can not be less than zero
     * 2. offRoad Distance can not be less than zero otherwise algorithm will crash
     */
    if (val < 0) {
      return 0
    }

    if (name == "offRoadDistance" && val < 5) {
      return 0
    }


    this.setState({ [name]: val })
  }

  // add via route
  addVia = () => {
    let via = [...this.state.via]
    via.push('')
    this.setState({ via })
  }

  // remove via route
  removeVia = (index) => {
    let via = [...this.state.via]

    via.splice(index, 1) // remove 1 item at index

    this.setState({ via })
  }

  // optimized route function

  optimizedRoute = () => {
    this.props.handleDirection(this.state.source, this.state.destination, this.state.via)
  }

  render() {
    return <FuelOpDetailsJSX
      addVia={this.addVia}
      removeVia={this.removeVia}
      inputData={{ ...this.state }}
      handleLocationChange={this.handleLocationChange}
      handleChange={this.handleChange}
      optimizedRoute={this.optimizedRoute}
    />
  }
}





export default FuelOpDetails;
