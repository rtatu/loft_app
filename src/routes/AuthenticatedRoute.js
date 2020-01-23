import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../renderer/token";
import cogoToast from "cogo-toast";

class AuthenticatedRoute extends React.Component {
  state = {
    isAuthenticated: false,
    loading: true
  };
  componentDidMount() {
    getToken()
      .then(res => {
        if (res)
          this.setState({ isAuthenticated: true, loading: false }, () => {
            console.log(this.state);
            cogoToast
              .loading("Loading your data...", {
                bar: { size: "2px", height: "20px" }
              })
              .then(() => {
                cogoToast.success("Data Successfully Loaded");
              });
          });
      })
      .catch(err => {
        console.log(err, "token error authentication route");
      });
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return this.state.loading ? (
      <div></div>
    ) : (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}
export default AuthenticatedRoute;
