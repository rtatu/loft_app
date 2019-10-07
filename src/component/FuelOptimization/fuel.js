import React from "react";
import FuelOpDetails from "./details";
import Map from "./map";
import "./fuel.sass";
import { Header } from "../General/Header";

const FuelOptimzation = () => (
  <div className="fuel-container">
    <Header label="Fuel Optimization" style={{
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '10px'
      }}/>
    <div className="fuel-op-container">
      <FuelOpDetails />
      <Map />
    </div>
  </div>
);

export default FuelOptimzation;
