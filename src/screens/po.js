import React from "react";
import PoBase from "../container/PoBase";
import { fetchPO } from "../store/actions/poAction";
import { connect } from "react-redux";

class PoContainer extends React.Component {
  componentDidMount() {
    electronRemote
      .getCurrentWindow()
      .setTitle("Lofty Logistics - Purchase Order");

    this.props.fetchPO();
  }

  render() {
    return <PoBase></PoBase>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.purchase_order
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPO: () => dispatch(fetchPO)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoContainer);
