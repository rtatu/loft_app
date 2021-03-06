// import all lists

import Class from "./class";
import Driver from "./driver";
import Department from "./department";
import Location from "./location";
import PaymentTerm from "./payterm";
import Subsidiary from "./subsidiary";
import Service from "./service";
import Truck from "./truck";
import Trailer from "./trailer";
import Item from "./item";
import ItemPricing from './itempricing'

// import header for customer

import { Customer, Contact, Billing } from "./customers";
import User from "./UserManagement";
import Order from "./OrderEntry";
import Safety from './Safety'
import Vendor from "./vendor";


/**
 * 
 * lists - navigate
 * class/driver/department/ - tableName
 * 
 */
export default {
  lists: {
    class: Class,
    driver: Driver,
    department: Department,
    location: Location,
    payterm: PaymentTerm,
    subsidiary: Subsidiary,
    service: Service,
    truck: Truck,
    trailer: Trailer,
    item: Item,
    itemPricing: ItemPricing,
    vendor: Vendor
  },
  customers: {
    customer: Customer,
    contact: Contact,
    billing: Billing,
  },

  userManagement: {
    user: User,
  },
  orderEntry: {
    order: Order,
  },
  safetyAndCompliance : {
    "safety Item" : Safety
  }

};
