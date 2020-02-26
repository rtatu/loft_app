import React from "react";

class InputArrayHOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.value || value
    };
    this.lastChild = React.createRef();
  }

  componentDidMount() {
    this.lastChild.current.scrollIntoView(false);
  }

  push = obj => {
    let data = [...this.state.data];
    data.push(obj);
    this.setState({ data }, () => {
      this.lastChild.current.scrollTo(0, this.lastChild.current.scrollHeight);
      this.pushValue();
    });
  };

  // push the values to formik component

  pushValue = () => {
    if (this.props.setFieldValue) {
      this.props.setFieldValue(this.props.name, this.state.data, false);
    }
  };

  remove = ind => {
    let data = [...this.state.data];
    data.splice(ind, ind);
    this.setState({ data });
  };

  render() {
    return (
      <this.props.render
        data={this.state.data}
        push={this.push}
        remove={this.remove}
        lastChild={this.lastChild}
      />
    );
  }
}

export default InputArrayHOC;
