import * as icons from "./icons";
import { List } from "./Lists";

const DataTableActions = [
  {
    label: "Add New",
    prop: "add",
    icon: icons.add,
    params: "name",
    component: List,
  },
  {
    label: "Edit",
    prop: "edit",
    icon: icons.edit,
    component: List,
  },
  {
    label: "Delete",
    prop: "delete",
    icon: icons.remove,
    component: List,
  },
];

const ChangeStatusActions = [
  {
    label: "Change Status",
    prop: "change_status",
    icon: icons.change_status,
    component: List,
  },
];

const SortActions = [
  {
    label: "Sort Ascending",
    prop: "sort_ascend",
    icon: icons.sort_ascend,
    component: List,
  },
  {
    label: "Sort Descending",
    prop: "sort_descend",
    icon: icons.sort_descend,
    component: List,
  },
];

const FilterAction = [
  {
    label: "Filter",
    prop: "filter",
    icon: icons.filter,
    component: List,
  },
];

const ManageContactAcion = [
  {
    label: "Manage Contacts",
    prop: "manage_contact",
    icon: icons.manage_contacts,
    component: List,
  },
];

export {
  DataTableActions,
  ChangeStatusActions,
  SortActions,
  FilterAction,
  ManageContactAcion,
};
