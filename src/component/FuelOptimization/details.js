import React from "react";
import "./details.sass";
import { Stack, Grid } from "../General/grid";
import LocationSearch from "./Location";
import UploadField from "../General/FileUpload";

const gridStyle = {
  gridGap: '10px'
}

const FuelOpDetails = () => (
  <div className="fo-details">
    <Stack style={gridStyle}>
      
      {/* places */}
      <Stack style={{gridGap:'10px', marginBottom: '20px'}}>
        <LocationSearch label="Source" />
        <LocationSearch label="Destination" />
      </Stack>

      {/* input details */}
      <Grid style={gridStyle}>
        <DetailsInput label="OffRoad Distance"/>
        <DetailsInput label="Fuel Tank Capacity"/>
        <DetailsInput label="Truck Average"/>
        <DetailsInput label="Initial Fuel"/>
      </Grid>

      {/* gas statation data */}

      <div>
        <label>Gas Station Data</label>
        <UploadField />
      </div>

    </Stack>
    <div className="fuel-op-button">
      <button className="optimize-route">Optimize Route</button>
    </div>
  </div>
);

const DetailsInput = ({ label, name, value, defaultValue, handleSelect, type = "text" }) => (
  <div className="fo-input">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      onChange={handleSelect}
      value={value}
      defaultValue={defaultValue}
    />
  </div>
);



export default FuelOpDetails;
