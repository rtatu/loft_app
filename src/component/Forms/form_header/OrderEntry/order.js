import Fields from "../../FormFields";

const Order = {
  General: [
    {
      label: "Customer",
      name: "customer.name",
      component: Fields.Text,
    },
    {
      label: "Invoice To",
      name: "invoiceTo",
      component: Fields.Text,
    },
    {
      label: "Customer Details",
      name: "customerDetails",
      component: Fields.Text,
    },
    {
      label: "Invoice Details",
      name: "invoiceDetails",
      component: Fields.Text,
    },
    {
      label: "Reference No.",
      name: "refrenceNo",
      component: Fields.Text,
    },
    {
      label: "Invoice No.",
      name: "invoiceNo",
      component: Fields.Text,
    },
    {
      label: "Booked With",
      name: "bookedWith",
      component: Fields.Text,
    },
    {
      label: "Booked By",
      name: "bookedBy",
      component: Fields.Text,
    },
    {
      label: "Invoice Total",
      name: "invoiceTotal",
      component: Fields.Text,
    },
    {
      label: "Due In",
      name: "dueIn",
      component: Fields.Text,
    },
    {
      label: "Currency",
      name: "currency",
      component: Fields.Select,
      data: ["CAD", "USD"],
      readOnly: true,
      defaultValue: "CAD",
    },
    {
      label: "Category",
      name: "category",
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
  "Order Leg": {
    name: "orderLeg",
    defaultValue: [],
    component: Fields.Notes,
  },
  Notification: {
    name: "notificaton",
    defaultValue: [],
    component: Fields.Notes,
  },
  Billing: {
    name: "billing",
    defaultValue: [],
    component: Fields.Notes,
  },
  Attachment: {
    name: "attachment",
    defaultValue: [],
    component: Fields.Notes,
  },
};

export default Order;
