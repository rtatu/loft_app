import Fields from "../FormFields";

const Department = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text
    },
    {
      label: "Association With",
      name: "associationWith",
      component: Fields.Select,
      readOnly: true,
      defaultValue: "CUSTOMERS",
      data: ["CUSTOMERS", "CUSTOM BROKER", "CARRIERS", "VENDORS"]
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

export default Department;
