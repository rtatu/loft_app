import Fields from "../FormFields";

const Item = {
  General: [
    {
      label: "Code",
      name: "code",
      component: Fields.Text
    },
    {
      label: "Name",
      name: "name",
      component: Fields.Text
    },
    {
      label: "Part No.",
      name: "partNo",
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
      label: "Equipment Type",
      name: "equipmentType",
      component: Fields.Select,
      data: ["TRAILER", "TRUCK"],
      readOnly: true,
      defaultValue: "TRAILER"
    },
    {
      label: "Quantity Unit",
      name: "quantityUnit",
      component: Fields.Select,
      data: [
        "LBS",
        "KG",
        "L",
        "GAL",
        "PR",
        "PCS",
        "DZN",
        "TOT",
        "BKT",
        "CAS",
        "PKG",
        "SKD",
        "UNT",
        "BAGS"
      ],
      readOnly: true,
      defaultValue: "KG"
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      data: ["ACTIVE", "INACTIVE"],
      readOnly: true,
      defaultValue: "ACTIVE"
    },
    {
      label: "Description",
      name: "description",
      component: Fields.Textarea
    }
  ]
};

export default Item;
