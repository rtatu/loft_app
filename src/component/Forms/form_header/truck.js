import Fields from "../FormFields";

const Truck = {
  General: [
    {
      label: "Unit No",
      name: "unitNo",
      component: Fields.Text
    },
    {
      label: "Truck Type",
      name: "truckType",
      component: Fields.Text
    },
    {
      label: "Category",
      name: "category",
      component: Fields.Select,
      autoprop: "datastore.class",
      autofillProp: "name"
    },
    {
      label: "Division",
      name: "division",
      component: Fields.Select,
      autoprop: "datastore.subsidiary",
      autofillProp: "name"
    },
    {
      label: "Terminal",
      name: "terminal",
      component: Fields.Select,
      autoprop: "datastore.subsidiary",
      autofillProp: "name"
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
  "Truck Registration": [
    {
      label: "Vin No.",
      name: "vinNo",
      component: Fields.Text
    },
    {
      label: "Make",
      name: "make",
      component: Fields.Text
    },
    {
      label: "Model",
      name: "model",
      component: Fields.Text
    },
    {
      label: "Model",
      name: "model",
      component: Fields.Text
    },
    {
      label: "Year",
      name: "year",
      component: Fields.Text
    },
    {
      label: "Plate No",
      name: "plateNo",
      component: Fields.Text
    },
    {
      label: "Rin No",
      name: "rinNo",
      component: Fields.Text
    },
    {
      label: "IFTA",
      name: "ifta",
      component: Fields.Text
    },
    {
      label: "Vehicle Weight",
      name: "vehicleWeight",
      component: Fields.Text
    },
    {
      label: "Vehicle Weight Unit",
      name: "vehicleWeightUnit",
      data: ["KG", "POUND"],
      readOnly: true,
      defaultValue: "POUND",
      component: Fields.Select
    },
    {
      label: "Reg. Gross Weight",
      name: "regGrossWeight",
      component: Fields.Text
    },
    {
      label: "Reg. Gross Weight Unit",
      name: "regGrossWeightUnit",
      data: ["KG", "POUND"],
      readOnly: true,
      defaultValue: "POUND",
      component: Fields.Select
    },
    {
      label: "Status",
      name: "status",
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE",
      component: Fields.Select
    }
  ],
  Notes: {
    name: 'notes',
    defaultValue: [],
    component: Fields.InputArrayHOC,
    render: Fields.Notes
  },
  History: {
    name: 'notes',
    defaultValue: [],
    component: Fields.Notes
  },
};

export default Truck;
