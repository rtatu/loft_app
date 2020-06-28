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
      component: Fields.Select,
      disabledOn: ["equipmentType"],
      conditionAutoProp: {
        dependOn: "equipmentType",
        condition: {
          TRUCK: "datastore.truck",
          TRAILER: "datastore.trailer",
        },
      },
      autofillProp: "unitNo",
    },
    {
      label: "Division",
      name: "division",
      component: Fields.Select,
      autoprop: "datastore.subsidiary",
      autofillProp: "name",
      disabledOn: ["equipmentType"],
    },
    {
      label: "Category",
      name: "category",
      component: Fields.Select,
      autoprop: "datastore.class",
      autofillProp: "name",
      disabledOn: ["equipmentType"],
    },
    {
      label: "Title",
      name: "title",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
    },
    {
      label: "Type",
      name: "type",
      component: Fields.Select,
      readOnly: true,
      data: ["AXLE", "GENERAL", "RECCURENCE"],
      disabledOn: ["equipmentType"],
    },
    {
      label: "Period",
      name: "period",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
      showOn: [
        {
          name: "type",
          value: "RECCURENCE",
        },
      ],
    },
    {
      label: "Period Unit",
      name: "periodUnit",
      component: Fields.Select,
      readOnly: true,
      data: ["DAYS", "WEEKS", "MONTHS", "YEAR"],
      disabledOn: ["equipmentType"],
      showOn: [
        {
          name: "type",
          value: "RECCURENCE",
        },
      ],
    },
    {
      label: "Type Driver Side",
      name: "typeDriverSide",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
      showOn: [
        {
          name: "type",
          value: "AXLE",
        },
      ],
    },
    {
      label: "Type Passenger Side",
      name: "typePassengerSide",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
      showOn: [
        {
          name: "type",
          value: "AXLE",
        },
      ],
    },
    {
      label: "Odometer",
      name: "odometer",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      readOnly: true,
      data: [
        "DEFERRED",
        "OPEN",
        "ASSIGNED",
        "CANCELLED",
        "INCOMPLETE",
        "COMPLETE",
      ],
      disabledOn: ["equipmentType"],
    },
    {
      label: "Reported On",
      name: "reportedOn",
      component: Fields.Date,
      disabledOn: ["equipmentType"],
    },
    {
      label: "Posted On",
      name: "postedOn",
      component: Fields.Date,
      disabledOn: ["equipmentType"],
    },
    {
      label: "Due On",
      name: "dueOn",
      component: Fields.Date,
      disabledOn: ["equipmentType"],
      showOn: [
        {
          name: "status",
          value: "DEFERRED",
        },
      ],
    },
    {
      label: "Reported By",
      name: "reportedBy",
      component: Fields.Text,
      disabledOn: ["equipmentType"],
    },
    {
      label: "Description",
      name: "description",
      component: Fields.Textarea,
      disabledOn: ["equipmentType"],
    },
  ],
};

export default Issues;
