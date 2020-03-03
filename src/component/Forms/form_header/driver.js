import Fields from "../FormFields";

const Driver = {
  General: [
    {
      label: "Name",
      name: "name",
      component: Fields.Text
    },
    {
      label: "Code",
      name: "code",
      component: Fields.Text
    },
    {
      label: "Phone",
      name: "phone",
      component: Fields.Text
    },
    {
      label: "Cell",
      name: "cell",
      component: Fields.Text
    },
    {
      label: "US Cell",
      name: "uscell",
      component: Fields.Text
    },
    {
      label: "Email",
      name: "email",
      component: Fields.Text
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
      component: Fields.StateAndProvince,
      labelChange: { USA: "State", CANADA: "Province" },
      changeOn: "country"
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

export default Driver;
