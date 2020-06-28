import React from "react";
import { connect } from "react-redux";
import DataMaintenance from "../component/DataMaintenance";
import { fetchCustomer } from "../store/actions/customerAction";

const DataMaintenanceScreen = (props) => (
  <DataMaintenance
    tableName={props.tableName}
    navigate={props.navigate}
    data={props.navigateData}
    loading={props.loading}
    dispatchFetch={props.dispatchFetch}
  />
);

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName } = ownProps.match.params;

  // set window's title

  electronRemote
    .getCurrentWindow()
    .setTitle("Lofty Logistics - Data Maintenance");
  return {
    navigateData:
      (state.dm[navigate] &&
      state.dm[navigate]["data"] && // check if data is not null
        state.dm[navigate]["data"][
          tableName // get table data
        ]) ||
      state.dm[navigate], // if no table in param then entire navigate data
    loading: state.dm[navigate] && state.dm[navigate]["loading"], // check if data is loaded
    navigate,
    tableName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetch: () => dispatch(fetchCustomer),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataMaintenanceScreen);
