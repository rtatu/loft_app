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
        <LocationSearch label="Source" />
        {
          props.via.map((stop, index) =>
            <LocationSearch key={index} label="Via" close={close} index={index} onClose={props.removeVia} />
          )
        }
        <LocationSearch label="Destination" />
        <AddDestination onAdd={props.addVia} />
      </Stack>

      {/* input details */}
      <Grid style={gridStyle}>
        <DetailsInput label="OffRoad Distance" />
        <DetailsInput label="Fuel Tank Capacity" />
        <DetailsInput label="Truck Average" />
        <DetailsInput label="Initial Fuel" />
      </Grid>

      {/* gas statation data */}

      <div>
        <label style={{ marginBottom: '5px' }}>Gas Station Data</label>
        <UploadField />
      </div>

    </Stack>
    <div className="fuel-op-button">
      <button className="optimize-route">Optimize Route</button>
    </div>
  </div>
);

class FuelOpDetails extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      source: '',
      destination: '',
      via: [''],
      offRoadDistance: '',
      tankCapacity: '',
      truckAverage: '',
      initFuel: '',
      fuelRateList: '',
    }
  }

  // update state
  handleChange = () => {

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

    // at 0 index empty the array
    if (index == 0) {
      via = []
    } else {
      via.splice(index, index)
    }

    this.setState({ via })
  }

  render() {
    return <FuelOpDetailsJSX via={this.state.via} addVia={this.addVia} removeVia={this.removeVia} />
  }
}





export default FuelOpDetails;
