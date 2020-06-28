import Fields from "../../FormFields";

const Contact = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text,
    },
    {
      label: "Position",
      name: "position",
      component: Fields.Text,
    },
    {
      label: "Department",
      name: "department",
      component: Fields.Text,
    },
    {
      label: "Billing Location",
      name: "billingLocation",
      component: Fields.Text,
    },
    {
      label: "Phone",
      name: "phone",
      component: Fields.Text,
    },
    {
      label: "Toll Free",
      name: "tollFree",
      component: Fields.Text,
    },
    {
      label: "Fax",
      name: "fax",
      component: Fields.Text,
    },
    {
      label: "Cell",
      name: "cell",
      component: Fields.Text,
    },
    {
      label: "Email",
      name: "email",
      component: Fields.Text,
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

export default Contact;
