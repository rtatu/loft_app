import React from "react";
import "./login.sass";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { loginToLoft } from "../../store/actions/userAction";
import { fetchList } from "../../store/actions/listAction";
import { Redirect } from "react-router-dom";

const FormLogin = props => (
  <div className="login">
    <h1>Sign into your account</h1>
    <form className="loginForm" onSubmit={props.handleSubmit}>
      <div className="loginInput">
        <label>Email or username</label>
        <input
          type="text"
          name="username"
          placeholder="enter your email or username"
          autoComplete="off"
          required
          onChange={props.handleChange}
          disabled={props.isSubmitting}
        />
      </div>
      <div className="loginInput">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          autoComplete="off"
          required
          onChange={props.handleChange}
          disabled={props.isSubmitting}
        />
      </div>
      <div className="rememberMe">
        <input
          type="checkbox"
          name="rememberMe"
          className="col-vis-check"
          disabled={props.isSubmitting}
          onChange={props.handleChange}
        />
        <div className="custom-checkbox">
          <svg className="svg svg-icon" viewBox="0 0 20 20">
            <path
              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
              style={{ stroke: "rgb(255, 255, 255)", fill: "white" }}
            ></path>
          </svg>
        </div>
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      {props.status && props.status.error && (
        <p className="error">{props.status.error}</p>
      )}
      <div className="submit-login" ref={props.submitContainer}>
        <input type="submit" value="Sign In" id="login" />
      </div>
      <div className="loader" ref={props.loader}>
        <div className="spinner spinner-1"></div>
      </div>
    </form>
  </div>
);

const FormLoginContainer = withFormik({
  mapPropsToValues(props) {
    return {
      username: "",
      password: "",
      rememberMe: false
    };
  },
  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(true);
    formikBag.props.showLoader(true);

    // start validating
    formikBag.props
      .login(values.username, values.password, values.rememberMe)
      .then(res => {
        console.log(res, "formik");
        formikBag.props.fetchList();
      })
      .catch(err => {
        console.log(err);
        formikBag.setSubmitting(false);
        formikBag.props.showLoader(false);

        formikBag.setStatus({
          error: err.data.message
        });
      });
  }
})(FormLogin);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.loader = React.createRef();
    this.submitContainer = React.createRef();
  }

  showLoader = isSubmitting => {
    if (isSubmitting) {
      this.loader.current.style.display = "flex";
      this.submitContainer.current.style.display = "none";
    } else {
      this.loader.current.style.display = "none";
      this.submitContainer.current.style.display = "block";
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { user } = this.props;

    if (user.token) {
      return <Redirect to={from} />;
    }
    return (
      <FormLoginContainer
        loader={this.loader}
        submitContainer={this.submitContainer}
        showLoader={this.showLoader}
        login={this.props.loginToLoft}
        changestate={this.props.changestate}
        fetchList={this.props.fetchList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    dm: state.dm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginToLoft: (email, password, rememberMe) =>
      dispatch(dispatch => loginToLoft(dispatch, email, password, rememberMe)),
    fetchList: () => dispatch(fetchList)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
