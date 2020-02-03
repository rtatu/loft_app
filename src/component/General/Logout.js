import React from "react";
import { connect } from "react-redux";
import { logoutFromLoft } from "../../store/actions/userAction";
import Image from "./Image";
import { withRouter } from "react-router-dom";

class LogOut extends React.Component {
  logout = async event => {
    event.preventDefault();
    try {
      let res = await this.props.logoutFromLoft();
      this.props.history.push("/login");
    } catch (error) {
      if (error.code == "USER_NOT_FOUND") this.props.history.push("/login");
      console.log(error);
    }
  };

  render() {
    return (
      <a onClick={this.logout} href="#">
        <Image source={this.props.src} />
        <span className="sidebar_hide">Log Out</span>
      </a>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutFromLoft: () => dispatch(logoutFromLoft)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogOut));
