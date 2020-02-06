import React from "react";
import Datatable from "../component/Datatable";
import { connect } from "react-redux";
import DataTableBase from "../container/DataTableBase";

const DataMaintenance = props => (
  <DataTableBase navigate={props.match.params.navigate}>
    {!props.match.params.tableName ? null : (
      <Datatable
        tableName={props.match.params.tableName}
        data={props.navigateData}
        loading={props.loading}
      />
    )}
  </DataTableBase>
);

const mapStateToProps = (state, ownProps) => {
  return {
    navigateData:
      (state.dm[ownProps.match.params.navigate]["data"] && // check if data is not null
        state.dm[ownProps.match.params.navigate]["data"][
          ownProps.match.params.tableName // get table data
        ]) ||
      state.dm[ownProps.match.params.navigate], // if no table in param then entire navigate data
    loading: state.dm[ownProps.match.params.navigate]["loading"] // check if data is loaded
  };
};

export default connect(mapStateToProps)(DataMaintenance);
