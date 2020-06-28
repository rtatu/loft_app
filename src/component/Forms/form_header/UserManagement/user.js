import Fields from "../../FormFields";

const User = {
  General: [
    {
      label: "First Name",
      name: "firstName",
      component: Fields.Text,
    },
    {
      label: "Last Name",
      name: "lastName",
      component: Fields.Text,
    },
    {
      label: "Email",
      name: "email",
      component: Fields.Text,
    },
    {
      label: "View",
      name: "view",
      component: Fields.CheckList,
    },
    {
      label: "Create",
      name: "create",
      component: Fields.CheckList,
    },
    {
      label: "Update",
      name: "update",
      component: Fields.CheckList,
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE",
    },
  ],
};

export default User;
