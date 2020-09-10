import * as icons from "./icons";
import { List } from "./Lists";

const Actions = [
  {
    label: "Request quote",
    prop: process.env.BASE_API_URL +'/archive/itemPricing/sendmail',
    icon: icons.add,
    params: "mail",
    component: List,
  },
];
export {Actions}