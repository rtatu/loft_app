import React from "react";
import DataMaintenanceBase from "../../container/DataMaintenanceBase";
import DtNavs from "../Datatable/datatable_navigation";
import Datatable from "../Datatable";

class DataMaintenance extends React.Component {
  renderNested = () => {
    return (
      <DataMaintenanceBase>
        <DtNavs
          baseLink={`/database-maintenance/${this.props.navigate}`}
          key={this.props.navigate}
          navigate={this.props.navigate}
        />
        {this.props.tableName ? (
          <Datatable
            tableName={this.props.tableName}
            navigate={this.props.navigate}
            data={this.props.data}
            loading={this.props.loading}
          />
        ) : null}
      </DataMaintenanceBase>
    );
  };

  renderWithoutNested = () => {
    console.log(this.props);
    if (this.props.loading) this.dispatchFetch();
    return (
      <DataMaintenanceBase>
        <Datatable
          tableName={this.props.tableName}
          navigate={this.props.navigate}
          data={this.props.data}
          loading={this.props.loading}
        />
      </DataMaintenanceBase>
    );
  };

  dispatchFetch = () => {
    this.props
      .dispatchFetch()
      .then((res) => {
        console.log(res, "111");
      })
      .catch((err) => {
        console.log(err, "111");
      });
  };

  render() {
    return this.props.navigate == "lists"
      ? this.renderNested()
      : this.renderWithoutNested();
  }
}

export default DataMaintenance;
