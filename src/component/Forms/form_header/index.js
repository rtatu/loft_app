import Class from "./class";
import Department from "./department";
import PaymentTerm from "./payterm";
import Truck from "./truck";
import Service from "./service";
import Terminal from "./terminal";
import Driver from "./driver";
import Subsidiary from "./subsidiary";
import Location from "./location";
import Trailer from "./trailer";
import Item from "./item";
import Inventory from "./po/inventory";
import Issues from "./po/issue";
import PO from "./po/po";
import { Customer, ManageContacts, BillTo, Contact } from "./customers";
import User from "./UserManagement";
import Order from "./OrderEntry";
import ItemPricing from "./pricing";
import Safety from "./Safety";

export default {
  class: Class,
  department: Department,
  payterm: PaymentTerm,
  truck: Truck,
  service: Service,
  terminal: Terminal,
  driver: Driver,
  subsidiary: Subsidiary,
  location: Location,
  trailer: Trailer,
  item: Item,
  itemPricing: ItemPricing,
  // po
  inventory: Inventory,
  issues: Issues,
  po: PO,

  // customers
  customer: Customer,
  contact: ManageContacts,
  billTo: BillTo,
  contact: Contact,

  // user management
  user: User,

  // order entry
  order: Order,
  "safety Item": Safety,
};
