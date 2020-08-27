import Fields from "../FormFields";

const ItemPricing = {
  General: [
    {
      label: "Item",
      name: "item",
      component: Fields.Select,
      autoprop: "datastore.item",
      autofillProp: "name",
    },
    {
      label: "Manufacturer",
      name: "manufacturer",
      component: Fields.Text,
    },
    {
      label: "Vendor",
      name: "vendor",
      component: Fields.Select,
      autoprop: "datastore.vendor",
      autofillProp: "name",
    },
    {
      label: "Quotation Data",
      name: "quotationData",
      component: Fields.Date,
    },
    {
      label: "Price",
      name: "price",
      component: Fields.Text,
    },
    {
      label: "Price Unit",
      name: "priceUnit",
      component: Fields.Select,
      data: ["CAD", "USD"],
      readOnly: true,
      defaultValue: "CAD",
    },
  ],

  Warranty: [
    {
      label: "Warranty Available",
      name: "warrantyAvailable",
      component: Fields.Select,
      data: ["YES", "NO"],
      readOnly: true,
      defaultValue: "YES",
    },
    {
      label: "WarrantyProvidedBy",
      name: "warrantyProvidedBy",
      component: Fields.Select,
      data: ["VENDOR", "MANUFACTURER"],
      readOnly: true,
      defaultValue: "VENDOR",
    },
    {
      label: "Period",
      name: "period",
      component: Fields.Text,
    },
    {
      label: "Period Unit",
      name: "periodUnit",
      component: Fields.Select,
      data: ["DAYS", "WEEKS", "MONTHS", "YEARS"],
      readOnly: true,
      defaultValue: "DAYS",
    },
    {
      label: "Mileage",
      name: "mileage",
      component: Fields.Text,
    },
    {
      label: "Mileage Unit",
      name: "mileageUnit",
      component: Fields.Select,
      data: ["KM", "MILES"],
      readOnly: true,
      defaultValue: "KM",
    },
    {
      label: "Notes",
      name: "notes",
      component: Fields.Textarea,
    },
  ],
};

export default ItemPricing;
