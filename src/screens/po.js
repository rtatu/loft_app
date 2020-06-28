import React from "react";
import PoBase from "../container/PoBase";
import { fetchPO } from "../store/actions/poAction";
import { connect } from "react-redux";
import Datatable from "../component/Datatable";

class PoContainer extends React.Component {
  componentDidMount() {
    electronRemote
      .getCurrentWindow()
      .setTitle("Lofty Logistics - Purchase Order");

    this.props.fetchPO();
  }

  renderNavigate = () => {
    switch (this.props.navigate) {
      case "dashboard":
        return null;
      case "reports":
        return null;
      case undefined:
        return null;
      default:
        return (
          <Datatable
            tableName={this.props.navigate}
            data={this.props.data || {}}
            loading={this.props.loading}
            navigate={"purchase_order"}
          />
        );
    }
  };

  render() {
    return <PoBase>{this.renderNavigate()}</PoBase>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let { navigate } = ownProps.match.params;
  return {
    data:
      state.purchase_order &&
      state.purchase_order.data &&
      state.purchase_order.data[navigate],
    navigate, // table name
    loading: state.purchase_order && state.purchase_order.loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPO: () => dispatch(fetchPO),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PoContainer);
