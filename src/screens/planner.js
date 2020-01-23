import React from "react";
import { Route } from "react-router-dom";
import App from "../component/App";
import Planning from "../component/Planner";
import ArchiveSidebarJSX from "../component/App/archive_sidebar";
import Header from "../component/header";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

const Planner = () => (
  <div style={{ display: "flex", height: "100%" }}>
    <App />
    <div style={style}>
      <Header />
      <Planning />
    </div>
  </div>
);

export default Planner;
