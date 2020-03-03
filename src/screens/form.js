import FormContainer from "./../component/Forms";
import { connect } from "react-redux";
import React from "react";
import { addToList, updateInList } from "../store/actions/listAction";

const Form = props => (
  <FormContainer
    datastore={props.datastore}
    data={props.data}
    name={props.match.params.tableName}
    id={props.match.params.id}
    addToList={props.addToList}
    updateInList={props.updateInList}
  />
);

const setWindowTitle = (data, tableName) => {
  let tb = tableName.charAt(0).toUpperCase() + tableName.slice(1);
  if (!data) {
    electronRemote.getCurrentWindow().setTitle(`Add New ${tb}`);
    return;
  }

  electronRemote
    .getCurrentWindow()
    .setTitle(`Edit ${tb} :- ${data.name || data.unitNo}`);
};

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName, id } = ownProps.match.params;
  let cs = {
    datastore: state.dm[navigate] && state.dm[navigate]["data"],
    data:
      state.dm[navigate] &&
      state.dm[navigate]["data"] &&
      state.dm[navigate]["data"][tableName] &&
      state.dm[navigate]["data"][tableName][id]
  };

  setWindowTitle(cs.data, tableName);

  return cs;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let { tableName } = ownProps.match.params;

  return {
    addToList: data =>
      dispatch(dispatch => addToList(dispatch, tableName, data)),
    updateInList: data =>
      dispatch(dispatch => addToList(dispatch, tableName, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
