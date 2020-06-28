import Fields from "../../FormFields";

const Customer = {
  General: [
    {
      label: "Customer Code",
      name: "code",
      component: Fields.Text,
    },
    {
      label: "Customer Name",
      name: "name",
      component: Fields.Text,
    },
    {
      label: "Cell",
      name: "cell",
      component: Fields.Text,
    },
    {
      label: "Phone",
      name: "phone",
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
      data: ["ACTIVE", "INACTIVE", "ON CREDIT HOLD"],
      readOnly: true,
      defaultValue: "ACTIVE",
    },
  ],
  Address: [
    {
      label: "Address Line 1",
      name: "addressLine1",
      component: Fields.Text,
    },
    {
      label: "Address Line 2",
      name: "addressLine2",
      component: Fields.Text,
    },
    {
      label: "Country",
      name: "country",
      data: ["USA", "CANADA"],
      readOnly: true,
      defaultValue: "CANADA",
      component: Fields.Select,
    },
    {
      label: "State",
      name: "state_province",
      component: Fields.StateAndProvince,
      labelChange: { USA: "State", CANADA: "Province" },
      changeOn: "country",
    },
    {
      label: "City",
      name: "city",
      component: Fields.Text,
    },
    {
      label: "Postal Code",
      name: "postal_zip",
      component: Fields.Text,
      labelChange: { USA: "Postal Code", CANADA: "Zip Code" },
      changeOn: "country",
    },
  ],

  Notification: [
    {
      label: "Delay In Pickup",
      name: "delayInPickup",
      component: Fields.Text,
    },
    {
      label: "Delay In Delivery",
      name: "delayInDelivery",
      component: Fields.Text,
    },
    {
      label: "Order Entered",
      name: "orderEntered",
      component: Fields.Text,
    },
    {
      label: "Live Tracking Mail",
      name: "liveTrackingMail",
      component: Fields.Text,
    },
    {
      label: "Shipment Picked Up",
      name: "shipmentPickedUp",
      component: Fields.Text,
    },
    {
      label: "Shipment Delivered",
      name: "shipmentDelivered",
      component: Fields.Text,
    },
    {
      label: "Check Calls",
      name: "checkCalls",
      component: Fields.Text,
    },
    {
      label: "Email for accessorial charges",
      name: "emailsForAccessorialCharges",
      component: Fields.Text,
    },
    {
      label: "Invoice",
      name: "invoice",
      component: Fields.Text,
    },
    {
      label: "Invoice Due",
      name: "invoiceDue",
      component: Fields.Text,
    },
    {
      label: "Equipment Availability",
      name: "equipmentAvailability",
      component: Fields.Text,
    },
  ],
  // Notes: {
  //   name: "notes",
  //   defaultValue: [],
  //   component: Fields.InputArrayHOC,
  //   render: Fields.Notes,
  // },
};

export default Customer;
