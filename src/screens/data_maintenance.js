import React from "react";
import Datatable from "../component/Datatable";
import ArchiveSidebarJSX from "../component/App/archive_sidebar";

const DataMaintenance = props => (
  <div style={{ display: "flex", height: "100%" }}>
    <ArchiveSidebarJSX />
    <Datatable
      location={props.match.url}
      tableName={props.match.params.tableName}
      navigate={props.match.params.navigate}
    />
  </div>
);

export default DataMaintenance;
