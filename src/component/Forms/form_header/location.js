import Fields from "../FormFields";

const Location = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text
    },
    {
      label: "Email",
      name: "email",
      component: Fields.Text
    },
    {
      label: "Working Hour",
      name: "workingHour",
      component: Fields.WorkingHour
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
  Address: [
    {
      label: "Address Line 1",
      name: "addressLine1",
      component: Fields.Text
    },
    {
      label: "Address Line 2",
      name: "addressLine2",
      component: Fields.Text
    },
    {
      label: "Country",
      name: "country",
      data: ["USA", "CANADA"],
      readOnly: true,
      defaultValue: "CANADA",
      component: Fields.Select
    },
    {
      label: "State",
      name: "state_province",
      component: Fields.Select,
      labelChange: { USA: "State", CANADA: "Province" },
      changeOn: "country",
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE"
    },
    {
      label: "City",
      name: "city",
      component: Fields.Text
    },
    {
      label: "Postal Code",
      name: "postal_zip",
      component: Fields.Text,
      labelChange: { USA: "Postal Code", CANADA: "Zip Code" },
      changeOn: "country"
    }
  ]
};

export default Location;
