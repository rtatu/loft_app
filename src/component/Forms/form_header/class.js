import Fields from "../FormFields";

const Class = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text,
      validation: [
        {
          type: "DEFAULT",
          errorMessage: "It should be string.",
        },
        {
          type: "UNIQUE_VALIDATION",
          errorMessage: "Value should be unique.",
          path: "class",
        },
        {
          type: "REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
    },
    {
      label: "Association With",
      name: "associationWith",
      component: Fields.Select,
      readOnly: true,
      defaultValue: "ORDER",
      data: ["ORDER", "ORDER LEG", "CARRIERS", "VENDORS"],
    },
    {
      label: "Color Code",
      name: "colorCode",
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
};

export default Class;
