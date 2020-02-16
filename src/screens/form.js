import FormContainer from "./../component/Forms";
import { connect } from "react-redux";
import React from "react";

const Form = props => (
  <FormContainer
    datastore={props.datastore}
    data={props.data}
    name={props.match.params.tableName}
    id={props.match.params.id}
  />
);

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName, id } = ownProps.match.params;
  return {
    datastore: state.dm[navigate] && state.dm[navigate]["data"],
    data:
      state.dm[navigate] &&
      state.dm[navigate]["data"] &&
      state.dm[navigate]["data"][tableName] &&
      state.dm[navigate]["data"][tableName][id]
  };
};

export default connect(mapStateToProps)(Form);
