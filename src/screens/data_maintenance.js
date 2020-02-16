import React from "react";
import Datatable from "../component/Datatable";
import { connect } from "react-redux";
import DataTableBase from "../container/DataTableBase";

const DataMaintenance = props => (
  <DataTableBase navigate={props.match.params.navigate}>
    {!props.match.params.tableName ? null : (
      <Datatable
        tableName={props.match.params.tableName}
        navigate={props.match.params.navigate}
        data={props.navigateData}
        loading={props.loading}
      />
    )}
  </DataTableBase>
);

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName } = ownProps.match.params;
  return {
    navigateData:
      (state.dm[navigate] &&
      state.dm[navigate]["data"] && // check if data is not null
        state.dm[navigate]["data"][
          tableName // get table data
        ]) ||
      state.dm[navigate], // if no table in param then entire navigate data
    loading: state.dm[navigate] && state.dm[navigate]["loading"] // check if data is loaded
  };
};

export default connect(mapStateToProps)(DataMaintenance);
