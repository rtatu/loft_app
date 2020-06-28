import React from "react";

const notificationRoot = document.getElementById("notification-root");

class Notification extends React.Component {
  constructor() {
    this.el = document.createElement("div");
  }

  componentDidMount() {}

  render() {
    return <div></div>;
  }

  componentWillUnmount() {}
}

export default Notification;
