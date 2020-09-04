import Fields from "../FormFields";

const ItemPricing = {
  General: [
    {
      label: "Item",
      name: "itemTitle",
      component: Fields.Select,
      autoprop: "datastore.item",
      autofillProp: "name",
      validation: [
        {
          type: "DEFAULT_REQUIRED",
          errorMessage: "This field is required.",
        }
      ],
    },
    {
      label: "Manufacturer",
      name: "manufacturer",
      component: Fields.Text,
      validation: [
        {
          type: "DEFAULT_REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
    },
    {
      label: "Vendor",
      name: "vendorName",
      component: Fields.Select,
      autoprop: "datastore.vendor",
      autofillProp: "name",
      validation: [
        {
          type: "REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
    },
    {
      label: "Quotation Date",
      name: "quotationDate",
      component: Fields.Date,
      validation: [
        {
          type: "REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
    },
    {
      label: "Price",
      name: "price",
      component: Fields.Text,
      validation: [
        {
          type: "REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
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
      label: "Warranty Provider",
      name: "warrantyProvider",
      component: Fields.Select,
      data: ["VENDOR", "MANUFACTURER"],
      readOnly: true,
      defaultValue: "VENDOR",
      disabledOn: ["warrantyAvailable"],
      expectedValues:["NO"],
    },
    {
      label: "Period",
      name: "period",
      component: Fields.Text,
      disabledOn: ["warrantyAvailable"],
      expectedValues:["NO"],
    },
    {
      label: "Period Unit",
      name: "periodUnit",
      component: Fields.Select,
      data: ["DAYS", "WEEKS", "MONTHS", "YEARS"],
      readOnly: true,
      defaultValue: "DAYS",
      disabledOn: ["warrantyAvailable"],
      expectedValues:["NO"],
    },
    {
      label: "Mileage",
      name: "mileage",
      component: Fields.Text,
      disabledOn: ["warrantyAvailable"],
      expectedValues:["NO"],
    },
    {
      label: "Mileage Unit",
      name: "mileageUnit",
      component: Fields.Select,
      data: ["KM", "MILES"],
      readOnly: true,
      defaultValue: "KM",
      disabledOn: ["warrantyAvailable"],
      expectedValues:["NO"],
    },
    {
      label: "Notes",
      name: "notes",
      component: Fields.Textarea,
    },
  ],
};

export default ItemPricing;
