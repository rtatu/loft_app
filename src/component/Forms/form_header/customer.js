import Fields from "../FormFields";

const Customer = {
  General: [
    {
      label: "Customer Code",
      name: "customerCode",
      component: Fields.Text
    },
    {
      label: "Customer Name",
      name: "customerName",
      component: Fields.Text
    },
    {
      label: "Cell",
      name: "cell",
      component: Fields.Text
    },
    {
      label: "Phone",
      name: "phone",
      component: Fields.Text
    },
    {
      label: "Email",
      name: "email",
      component: Fields.Text
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE"
    }
  ],
  Address: [
    {
      label: "Address Line 1",
      name: "addressLine1",
      component: Fields.Text
    },
    {
      label: "Address Line 2",
      name: "addressLine2",
      component: Fields.Text
    },
    {
      label: "Country",
      name: "country",
      data: ["USA", "CANADA"],
      readOnly: true,
      defaultValue: "CANADA",
      component: Fields.Select
    },
    {
      label: "State",
      name: "state_province",
      component: Fields.Text,
      labelChange: { USA: "State", CANADA: "Province" },
      changeOn: "country"
    },
    {
      label: "City",
      name: "city",
      component: Fields.Text
    },
    {
      label: "Postal Code",
      name: "postal_zip",
      component: Fields.Text,
      labelChange: { USA: "Postal Code", CANADA: "Zip Code" },
      changeOn: "country"
    }
  ],
  "Bill To": [
    {
      label: "Billing Location",
      name: "billingLocation",
      component: Fields.Text
    },
    {
      label: "Terms",
      name: "terms",
      component: Fields.Text
    },
    {
      label: "Address",
      name: "address",
      component: Fields.Text
    },
    {
      label: "Status",
      name: "status",
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE",
      component: Fields.Select
    },
    {
      label: "Standard to Print Notes",
      name: "standardPrintNotes",
      component: Fields.Textarea
    },
    {
      label: "Standard Invoice Instruction",
      name: "standardInvoiceInstruction",
      component: Fields.Textarea
    },
    {
      label: "QuickPay Discount Type 1",
      name: "discountOne",
      component: Fields.Text
    },
    {
      label: "If Paid in",
      name: "discountOneUnit",
      component: Fields.Text
    },
    {
      label: "QuickPay Discount Type 2",
      name: "discountTwo",
      component: Fields.Text
    },
    {
      label: "If Paid in",
      name: "discountTwoUnit",
      component: Fields.Text
    },
    {
      label: "QuickPay Discount Type 3",
      name: "discountThree",
      component: Fields.Text
    },
    {
      label: "If Paid in",
      name: "discountThreeUnit",
      component: Fields.Text
    }
  ],
  Contacts: Fields.Text,
  Notification: [
    {
      label: "Delay In Pickup",
      name: "delayInPickup",
      component: Fields.Text
    },
    {
      label: "Delay In Delivery",
      name: "delayInDelivery",
      component: Fields.Text
    },
    {
      label: "Order Entered",
      name: "orderEntered",
      component: Fields.Text
    },
    {
      label: "Live Tracking Mail",
      name: "liveTrackingMail",
      component: Fields.Text
    },
    {
      label: "Shipment Picked Up",
      name: "shipmentPickedUp",
      component: Fields.Text
    },
    {
      label: "Shipment Delivered",
      name: "shipmentDelivered",
      component: Fields.Text
    },
    {
      label: "Check Calls",
      name: "checkCalls",
      component: Fields.Text
    },
    {
      label: "Email for accessorial charges",
      name: "emailsForAccessorialCharges",
      component: Fields.Text
    },
    {
      label: "Invoice",
      name: "invoice",
      component: Fields.Text
    },
    {
      label: "Invoice Due",
      name: "invoiceDue",
      component: Fields.Text
    },
    {
      label: "Equipment Availability",
      name: "equipmentAvailability",
      component: Fields.Text
    }
  ],
  Notes: {
    name: 'notes',
    defaultValue: [],
    component: Fields.InputArrayHOC,
    render: Fields.Notes
  }
};

export default Customer;
