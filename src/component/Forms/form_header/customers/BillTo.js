import Fields from "../../FormFields";

const BillTo = {
  General: [
    {
      label: "Billing Location",
      name: "billingLocation",
      component: Fields.Text,
    },
    {
      label: "Terms",
      name: "terms",
      component: Fields.Text,
    },
    {
      label: "Address",
      name: "address",
      component: Fields.Text,
    },
    {
      label: "Status",
      name: "status",
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE",
      component: Fields.Select,
    },
    {
      label: "Standard to Print Notes",
      name: "standardPrintNotes",
      component: Fields.Textarea,
    },
    {
      label: "Standard Invoice Instruction",
      name: "standardInvoiceInstruction",
      component: Fields.Textarea,
    },
    {
      label: "QuickPay Discount Type 1",
      name: "discountOne",
      component: Fields.Text,
    },
    {
      label: "If Paid in",
      name: "discountOneUnit",
      component: Fields.Text,
    },
    {
      label: "QuickPay Discount Type 2",
      name: "discountTwo",
      component: Fields.Text,
    },
    {
      label: "If Paid in",
      name: "discountTwoUnit",
      component: Fields.Text,
    },
    {
      label: "QuickPay Discount Type 3",
      name: "discountThree",
      component: Fields.Text,
    },
    {
      label: "If Paid in",
      name: "discountThreeUnit",
      component: Fields.Text,
    },
  ],
};

export default BillTo;
