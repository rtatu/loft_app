import React from "react";
import Base from "../container/base";
import UserManagement from "../component/UserManagement";

const UserManagementScreen = (props) => {
  return (
    <Base>
      <UserManagement {...props} />
    </Base>
  );
};

export default UserManagementScreen;
