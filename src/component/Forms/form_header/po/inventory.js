import Fields from "../../FormFields";

const Inventory = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text,
    },
    {
      label: "Item Name",
      name: "itemName",
      component: Fields.Select,
      autoprop: "datastore.item",
      autofillProp: "name",
      autoFillAnotherProps: {
        fill: "itemCode",
        with: "code",
      },
    },
    {
      label: "Item Code",
      name: "itemCode",
      component: Fields.Select,
      autoprop: "datastore.item",
      autofillProp: "code",
      autoFillAnotherProps: {
        fill: "itemName",
        with: "name",
      },
    },
    {
      label: "Current Quantity",
      name: "currentQuantity",
      component: Fields.Text,
    },
    {
      label: "Check Date",
      name: "checkDate",
      component: Fields.Date,
    },
    {
      label: "Cost Per Item",
      name: "costPerItem",
      component: Fields.Text,
    },
    {
      label: "Cost Unit",
      name: "costUnit",
      component: Fields.Select,
      data: ["USD", "CAD"],
      readOnly: true,
      defaultValue: "USD",
    },
    {
      label: "Preferred Vendor",
      name: "preferredVendor",
      component: Fields.Select,
      autoprop: "datastore.vendor",
      autofillProp: "name",
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

export default Inventory;
