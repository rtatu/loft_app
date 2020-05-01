import Fields from "../../FormFields";

const General = {
  General: [
    {
      label: "Equipment Type",
      name: "equipmentType",
      component: Fields.Select,
      readOnly: true,
      data: ["NONE", "TRUCK", "TRAILER"],
      defaultValue: "NONE",
    },
    {
      label: "Unit No.",
      name: "unitNo",
      component: Fields.Select,
      autofillProp: "unitNo",
      autoprop: "datastore.truck",
      // change on too
    },
    {
      label: "Vendor",
      name: "vendor",
      component: Fields.Select,
      autoprop: "datastore.vendor",
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
      label: "Division",
      name: "division",
      component: Fields.Select,
      autoprop: "datastore.subsidiary",
      autofillProp: "name",
    },
    {
      label: "Assigned By",
      name: "assignedBy",
      component: Fields.Text,
    },
    {
      label: "Assigned To",
      name: "assignedTo",
      component: Fields.Text,
    },
    {
      label: "Reporting Time",
      name: "reportingTime",
      component: Fields.Date,
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Select,
      readOnly: true,
      data: ["ACTIVE", "COMPLETE", "INVOICED", "ENTERED IN QB"], // change component
    },
    {
      label: "Created By",
      name: "createdBy",
      component: Fields.Text, // change component
    },
    {
      label: "Vendor Notes",
      name: "vendorNotes",
      component: Fields.Textarea,
    },
    {
      label: "PO Notes",
      name: "poNotes",
      component: Fields.Textarea,
    },
  ],
};

const Issue = {};

export default General;
