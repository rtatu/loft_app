import React from "react";
import ArchiveSidebarJSX from "../component/App/archive_sidebar";
import ViewHeader from "../component/header/ViewHeader";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const ViewBase = (props) => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ArchiveSidebarJSX />
      <div style={style}>
        <ViewHeader />
        {props.children}
      </div>
    </div>
  );
};

export default ViewBase;
