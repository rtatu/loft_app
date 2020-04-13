import Fields from "../../FormFields";

const Issues = {
  General: [
    {
      label: "Equipment Type",
      name: "equipmentType",
      component: Fields.Select,
      readOnly: true,
      data: ["TRUCK", "TRAILER"],
    },
    {
      label: "Unit No.",
      name: "unitNo",
      component: Fields.Text,
    },
    {
      label: "Division",
      name: "division",
      component: Fields.Select,
      autoprop: "datastore.subsidiary",
      autofillProp: "name",
    },
    {
      label: "Category",
      name: "category",
      component: Fields.Select,
      autoprop: "datastore.class",
      autofillProp: "name",
    },
    {
      label: "Title",
      name: "title",
      component: Fields.Text,
    },
    {
      label: "Type",
      name: "type",
      component: Fields.Select,
      readOnly: true,
      data: ["AXLE", "GENERAL", "RECCURENCE"],
    },
    {
      label: "Type Driver Side",
      name: "typeDriverSide",
      component: Fields.Text,
    },
    {
      label: "Type Passenger Side",
      name: "typePassengerSide",
      component: Fields.Text,
    },
    {
      label: "Reported On",
      name: "reportedOn",
      component: Fields.Date,
    },
    {
      label: "Due On",
      name: "dueOn",
      component: Fields.Date,
    },
    {
      label: "Posted On",
      name: "postedOn",
      component: Fields.Date,
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
      readOnly: true,
      data: ["DAYS", "WEEKS", "MONTHS", "YEAR"],
    },
    {
      label: "Odometer",
      name: "odometer",
      component: Fields.Text,
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      readOnly: true,
      data: [
        "OPEN",
        "DEFERRED",
        "ASSIGNED",
        "CANCELLED",
        "INCOMPLETE",
        "COMPLETE",
      ],
    },
    {
      label: "Reported By",
      name: "reportedBy",
      component: Fields.Text,
    },
    {
      label: "Description",
      name: "description",
      component: Fields.Textarea,
    },
  ],
};

export default Issues;
