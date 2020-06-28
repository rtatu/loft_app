import React from "react";
import ManageContact from "../component/OrderEntry/ManageContact";
import { connect } from "react-redux";

const ManageContactScreen = (props) => {
  return <ManageContact {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  let { customerId } = ownProps.match.params;
  return {
    contact:
      state.dm &&
      state.dm.customers["data"] &&
      state.dm.customers["data"].customer &&
      state.dm.customers["data"].customer[customerId] &&
      state.dm.customers["data"].customer[customerId].contacts,
    billing:
      state.dm &&
      state.dm.customers["data"] &&
      state.dm.customers["data"].customer &&
      state.dm.customers["data"].customer[customerId] &&
      state.dm.customers["data"].customer[customerId].billTos,
    customerId,
  };
};

export default connect(mapStateToProps)(ManageContactScreen);
