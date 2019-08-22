import Fields from "../FormFields";

const Service = {
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
      defaultValue: "CUSTOMER",
      data: ["CUSTOMER", "LOCATION", "CARRIERS", "VENDORS"]
    },
    {
      label: "Text Field",
      name: "textField",
      component: Fields.Select,
      readOnly: true,
      defaultValue: "REQUIRED",
      data: ["REQUIRED", "NOT REQUIRED"]
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

export default Service;
