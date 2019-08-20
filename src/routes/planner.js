import React from "react";
import { Route } from "react-router-dom";
import App from "../component/App";
import Planning from "../component/Planner";
import ArchiveSidebarJSX from "../component/App/archive_sidebar";
import Header from "../component/header";

const Planner = () => (
  <div style={{ display: "flex", height: "100%" }}>
    <App />
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <Planning />
    </div>
  </div>
);

export default Planner;
