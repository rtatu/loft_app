import React from "react";
import UserManagementHeader from "./UserManagementHeader";
import Datatable from "../Datatable";
import DatatableEvents from "../Datatable/datatable_renderer_events";

class UserManagement extends React.Component {
  addNewUser = (e) => {
    DatatableEvents.newForm(e, "userManagement/user", "AddUser");
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          padding: "20px 50px",
        }}
      >
        <UserManagementHeader
          title={"User Management"}
          addNew={this.addNewUser}
        />
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Datatable
            tableName={"user"}
            navigate={"userManagement"}
            data={{
              1: {
                firstName: "Rohit",
                lastName: "Tatu",
                email: "rohit.tatu896@gmail.com",
              },
            }}
            loading={false}
            hideHeaderNav={true}
            hideContext={true}
          />
        </div>
      </div>
    );
  }
}

export default UserManagement;
