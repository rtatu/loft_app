// import the route events for navbar
import RouteEvents from "./sidebar_renderer_events";

const poNav = [
  {
    label: "Dashboard",
    path: "/po/dashboard",
  },
  {
    label: "Issues",
    path: "/po/issues",
  },
  {
    label: "Inventory",
    path: "/po/inventory",
  },
  {
    label: "Purchase Order",
    path: "/po/po",
  },
  {
    label: "Reports",
    path: "/po/reports",
  },
];

const archiveNav = [
  {
    label: "Customers",
    path: "/database-maintenance/customers/customer",
  },
  {
    label: "Prospects",
    path: "/database-maintenance/prospects/customer",
  },
  {
    label: "Shippers/Consignees",
    path: "/database-maintenance/shippers/shipper",
  },
  {
    label: "Outside Carriers",
    path: "/database-maintenance/outside-carriers/outside-carrier",
  },
  {
    label: "Misc. Vendors",
    path: "/database-maintenance/misc-vendors/misc-vendor",
  },
  {
    label: "Customs Broker",
    path: "/database-maintenance/customs-brokers/custom-broker",
  },
  {
    label: "Standard Charges",
    path: "/database-maintenance/standard-charges/standard-charge",
  },
  {
    label: "Jurisdictions",
    path: "/database-maintenance/jurisdictions/jurisdiction",
  },
  {
    label: "Resources",
    path: "/database-maintenance/resources/resource",
  },
  {
    label: "Payroll Schedules",
    path: "/database-maintenance/payroll-schedules/payroll-schedule",
  },
  {
    label: "Standard Templates",
    path: "/database-maintenance/standard-templates/standard-template",
  },
  {
    label: "Lists",
    path: "/database-maintenance/lists/class",
  },
  {
    label: "Comissions",
    path: "/database-maintenance/comissions/commision",
  },
  {
    label: "Master Orders",
    path: "/database-maintenance/master-orders/master-order",
  },
  {
    label: "Travel Times",
    path: "/database-maintenance/travel-times/travel-time",
  },
];

const nav_bar = [
  {
    LOGISITCS: [
      {
        label: "Order Entry",
        path: "/order-entry",
      },
      {
        label: "Planner",
        path: "/planner",
      },
      {
        label: "Dispatch Board",
        path: "/dispatch-board",
      },
    ],
  },
  {
    ACCOUNTING: [
      {
        label: "Taxes",
        path: "/taxes",
      },
      {
        label: "IFTA",
        path: "/ifta",
      },
      {
        label: "AR/PR",
        path: "/ar-pr",
      },
      {
        label: "Driver Payroll",
        path: "/driver-payroll",
      },
    ],
  },
  {
    SERVICES: [
      {
        label: "Purchase Order",
        path: "/po",
        event: RouteEvents["po"],
      },
      {
        label: "Maintenance",
        path: "/maintenance",
      },
      {
        label: "Quotation",
        path: "/quotation",
      },
      {
        label: "Vendor Management",
        path: "/vendor-management",
      },
      {
        label: "Database Maintenance",
        path: "/database-maintenance/lists",
        event: RouteEvents["database_maintenance"],
      },
    ],
  },
];

export { archiveNav, nav_bar, poNav };
