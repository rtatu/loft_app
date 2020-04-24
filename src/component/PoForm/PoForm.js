import React from "react";
import Choose from "./Choose";

class PoForm extends React.Component {
  state = {
    poType: "",
  };
  componentDidMount() {
    electronRemote.getCurrentWindow().setSize(800, 600);
  }

  handleTypeChange = (text) => {
    this.setState({ poType: text }, () => console.log(this.state));
  };

  render() {
    return (
      <Choose type={this.state.poType} handleClick={this.handleTypeChange} />
    );
  }
}

export default PoForm;
