import Customer from "./customer";
import Class from "./class";
import Department from "./department";
import PaymentTerm from "./payterm";
import Truck from "./truck";
import Service from "./service";
import Terminal from "./terminal";
import Contact from "./contact";
import Driver from "./driver";
import Subsidiary from "./subsidiary";
import Location from "./location";
import Trailer from "./trailer";
import Item from "./item";
import Inventory from "./po/inventory";
import Issues from "./po/issue";

export default {
  customer: Customer,
  class: Class,
  department: Department,
  payterm: PaymentTerm,
  truck: Truck,
  service: Service,
  terminal: Terminal,
  contact: Contact,
  driver: Driver,
  subsidiary: Subsidiary,
  location: Location,
  trailer: Trailer,
  item: Item,
  // po
  inventory: Inventory,
  issues: Issues,
};
