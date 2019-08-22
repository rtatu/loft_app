import Fields from "../FormFields";

const Terminal = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text
    },
    {
      label: "Location",
      name: "location",
      component: Fields.Select
    },
    {
      label: "Service",
      name: "service",
      component: Fields.Select
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE"
    }
  ]
};

export default Terminal;
