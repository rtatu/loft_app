import FormContainer from "./../component/Forms";
import { connect } from "react-redux";
import React from "react";
import { addToList, updateInList } from "../store/actions/listAction";
import PoForm from "../component/PoForm";

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { navigate, tableName, id } = props.match.params;

    let isPOForm = navigate == "purchase_order" && tableName == "po";

    this.state = {
      isPOForm,
      po_type: null,
    };
  }

  choosePO = (text) => {
    this.setState({ po_type: text });
  };

  renderForm = () => {
    const { props } = this;
    if (this.state.isPOForm && !this.state.po_type)
      return <PoForm choosePO={this.choosePO} />;
    else
      return (
        <FormContainer
          datastore={props.datastore}
          data={props.data}
          name={props.match.params.tableName}
          id={props.match.params.id}
          addToList={props.addToList}
          updateInList={props.updateInList}
          poType={this.state.po_type}
        />
      );
  };

  render() {
    return this.renderForm();
  }
}

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
    datastore:
      (state.dm[navigate] && state.dm[navigate]["data"]) ||
      (state.dm["list"] && state.dm["list"]["data"]),
    data:
      state.dm[navigate] &&
      state.dm[navigate]["data"] &&
      state.dm[navigate]["data"][tableName] &&
      state.dm[navigate]["data"][tableName][id],
  };

  setWindowTitle(cs.data, tableName);

  return cs;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let { tableName } = ownProps.match.params;

  return {
    addToList: (data) =>
      dispatch((dispatch) => addToList(dispatch, tableName, data)),
    updateInList: (data) =>
      dispatch((dispatch) => updateInList(dispatch, tableName, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
