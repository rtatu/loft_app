import React from "react";
import ReactDOM from "react-dom";

import "./loading.sass";

// ripple loading animation
const Loading = () => {
  return (
    <div id="loading">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

class Loader extends React.Component {
  render() {
    return this.props.show
      ? ReactDOM.createPortal(<Loading />, document.body)
      : null;
  }
}

export default Loader;
