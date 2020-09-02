import Fields from "../../FormFields";

const Safety = {
  General: [
    {
      label: "Name",
      name: "safetyItem",
      component: Fields.Text,
      validation: [
        {
          type: "DEFAULT",
          errorMessage: "It should be string.",
        },
        {
          type: "UNIQUE_VALIDATION",
          errorMessage: "Value should be unique.",
          path: "data",
        },
        {
          type: "REQUIRED",
          errorMessage: "This field is required.",
        },
      ],
    },
    {
      label: "Affiliated With",
      name: "affiliatedWith",
      component: Fields.Select,
      data: ["TRUCK", "TRAILER", "CHASIS", "CONTAINER", "DRIVER"],
      defaultValue: "TRUCK",
      readOnly: true,
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      data: ["ACTIVE", "INACTIVE"],
      defaultValue: "ACTIVE",
      readOnly: true,
    },
  ],
};

export default Safety;
