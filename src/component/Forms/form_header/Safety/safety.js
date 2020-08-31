import Fields from "../../FormFields";

const Safety = {
  General: [
    {
      label: "Name",
      name: "itemName",
      component: Fields.Text,
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
