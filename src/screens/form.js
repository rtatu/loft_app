import FormContainer from "./../component/Forms";
import { connect } from "react-redux";
import React from "react";
import { addToList, updateInList } from "../store/actions/listAction";
import PoForm from "../component/PoForm";
import getActionForDispatch from "../store/mapDispatchProps";
import getStoreForState from "../store/mapStateToProps";

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
          name={props.match.params.tableName || props.match.params.navigate}
          id={props.match.params.id}
          add={props.add}
          update={props.update}
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
    .setTitle(`Edit ${tb} :- ${data.name || data.unitNo || data.safetyItem}`);
};

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName, id } = ownProps.match.params;
  let cs = getStoreForState(state, navigate, tableName, id);

  console.log(cs, navigate, tableName, "state for form store");

  setWindowTitle(cs.data, tableName || navigate);

  return cs;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let { tableName, navigate } = ownProps.match.params;

  console.log(tableName, navigate, "check for nothing");

  return getActionForDispatch(dispatch, navigate, tableName);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
