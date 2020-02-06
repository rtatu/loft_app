import React from "react";
import ArchiveSidebarJSX from "../component/App/archive_sidebar";
import DtNav from "../component/Datatable/datatable_navigation";
import Header from "../component/header";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

const DataTableBase = props => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ArchiveSidebarJSX />
      <div style={style}>
        <Header />
        <DtNav
          baseLink={`/database-maintenance/${props.navigate}`}
          key={props.navigate}
          navigate={props.navigate}
        />
        {props.children}
      </div>
    </div>
  );
};

export default DataTableBase;
