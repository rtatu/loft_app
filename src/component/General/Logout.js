import React from "react";
import { connect } from "react-redux";
import { logoutFromLoft } from "../../store/actions/userAction";

class LogOut extends React.Component {
  render() {
    return <h1>Logout</h1>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutFromLoft: () => logoutFromLoft(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
