import React from "react";
import Fields from "../Forms/FormFields";
import Geosuggest from "react-geosuggest";
import "./geo.css";
import "./details.sass";
import { Grid } from "../General/grid";

const handleSelect = () => console.log("data");

const gridStyle = {
  gridGap: '10px'
}

const FuelOpDetails = () => (
  <div className="fo-details">
    <Grid style={gridStyle}>
      <div>
        <label>Source</label>
        <Geosuggest />
      </div>

      <div>
        <label>Destination</label>
        <Geosuggest />
      </div>  
    </Grid>
  </div>
);

const DetailsInput = ({ label, name, value, defaultValue, handleSelect }) => (
  <div className="fo-input">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      onChange={handleSelect}
      value={value}
      defaultValue={defaultValue}
    />
  </div>
);

export default FuelOpDetails;
