import React from "react";
import Choose from "./Choose";
import DatatableEvents from "../../component/Datatable/datatable_renderer_events";
import AssignSafety from "./AssignSafetyComponent";

class AssignPop extends React.Component {
  constructor(props) {
    super(props);
    this.truckId = props.match.params.truckId;
    this.id = props.match.params.id;
    this.state = {
      assign: false,
    };
  }

  componentDidMount() {
    electronRemote.getCurrentWindow().setSize(800, 650);
  }

  onContinue = (action) => {
    if (action == "add") {
      DatatableEvents.addNewWindow(null, null, this.truckId);
      electronRemote.getCurrentWindow().close();
    } else if (action == "assign") {
      this.setState({
        assign: true,
      });
    }
  };

  onSubmit = (ids) => {
    let data = {
      truckId: this.truckId,
      ids,
    };
    this.props.addSafetyGroupsToTrucks(data).then((res) => {
      if (res) {
        electronRemote.getCurrentWindow().close();
      }
    });
  };

  render() {
    if (this.id != "truck") {
      return null;
    }
    let { assign } = this.state;
    if (assign) {
      return (
        <AssignSafety
          {...this.props}
          truckId={this.truckId}
          onSubmit={this.onSubmit}
        />
      );
    }
    return <Choose onContinue={this.onContinue} />;
  }
}

export default AssignPop;
