import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthenticatedRoute = props => {
  const { state, component: Component, ...rest } = props;
  return state.loading ? (
    <div></div>
  ) : (
    <Route
      {...rest}
      render={props =>
        state.token ? <Component {...props} /> : <Redirect to="login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    state: state.user
  };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
