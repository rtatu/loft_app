import Fields from "../Forms/FormFields";
import "../Forms/form.sass";

const OrderHeader = {
  General: [
    {
      label: "Customer",
      name: "customer",
      component: Fields.Text
    },
    {
      label: "Invoice To",
      name: "invoice",
      component: Fields.Text
    },
    {
      label: "Customer Detail",
      name: "customerDetail",
      component: Fields.Text
    },
    {
      label: "Invoice To Detail",
      name: "invoiceToDetail",
      component: Fields.Text
    },
    {
      label: "Reference #",
      name: "referenceNo",
      component: Fields.Text
    },
    {
      label: "Order #",
      name: "orderNo",
      component: Fields.Text
    },
    {
      label: "Booked With",
      name: "bookedWith",
      component: Fields.Text
    },
    {
      label: "Invoice No",
      name: "invoiceNo",
      component: Fields.Text
    },
    {
      label: "Booked By",
      name: "bookedBy",
      component: Fields.Text
    },
    {
      label: "Invoice Total",
      name: "invoiceTotal",
      component: Fields.Text
    },
    {
      label: "Due In",
      name: "dueIn",
      component: Fields.Text
    },
    {
      label: "Currency",
      name: "currency",
      component: Fields.Text
    },
    {
      label: "Status",
      name: "status",
      component: Fields.Text
    },
    {
      label: "Category",
      name: "category",
      component: Fields.Text
    }
  ],
  "Order Leg Pickup": [
    {
      label: "From",
      name: "from",
      component: Fields.Text
    },
    {
      label: "Date & Time",
      name: "datetime",
      component: Fields.Text
    },
    {
      label: "Stop Type",
      name: "stopType",
      component: Fields.Text
    },
    {
      label: "Pickup No.",
      name: "pickupNo.",
      component: Fields.Text
    }
  ],
  "Order Leg Delivery": [
    {
      label: "To",
      name: "to",
      component: Fields.Text
    },
    {
      label: "Date & Time",
      name: "datetime",
      component: Fields.Text
    },
    {
      label: "Stop Type",
      name: "stopType",
      component: Fields.Text
    },
    {
      label: "Reference No.",
      name: "pickupNo.",
      component: Fields.Text
    }
  ]
};

export default OrderHeader;
