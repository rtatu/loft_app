import Fields from "../FormFields";

const PaymentTerm = {
  General: [
    {
      label: "Term Code",
      name: "termCode",
      component: Fields.Text
    },
    {
      label: "Description",
      name: "description",
      component: Fields.Text
    },
    {
      label: "Due After",
      name: "dueAfter",
      component: Fields.Text
    },
    {
      label: "In",
      name: "dueUnit",
      component: Fields.Select,
      readOnly: true,
      defaultValue: "DAYS",
      data: ["DAYS", "WEEKS", "FORTNIGHTS", "MONTHS"]
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

export default PaymentTerm;
