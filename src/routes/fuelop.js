import React from "react";
import App from "../component/App";
import Header from "../component/header";
import FuelOptimzation from "../component/FuelOptimization";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

const FuelOp = () => (
  <div style={{ display: "flex", height: "100%" }}>
    <App />
    <div style={style}>
      <Header />
      <FuelOptimzation />
    </div>
  </div>
);

export default FuelOp;