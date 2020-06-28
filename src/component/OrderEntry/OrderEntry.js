import React from "react";
import OrderEntryHeader from "./OrderEntryHeader";
import Datatable from "../Datatable";
import DatatableEvents from "../Datatable/datatable_renderer_events";

class OrderEntry extends React.Component {
  addNewOrder = (e) => {
    DatatableEvents.newForm(e, "orderEntry/order", "OrderEntry");
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          padding: "20px 50px",
        }}
      >
        <OrderEntryHeader title={"Orders"} addNew={this.addNewOrder} />

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Datatable
            tableName={"order"}
            navigate={"orderEntry"}
            data={{
              1: {
                name: "Rohit Tatu",
                invoiceTo: "John Snow",
                refrenceNo: "000111",
                invoiceNo: "000989",
                bookedWith: "Order",
                bookedBy: "rtatu",
                invoiceTotal: "1000",
                currency: "CAD",
                category: "Test 1",
                status: "ACTIVE",
              },
            }}
            loading={false}
            hideHeaderNav={true}
            hideContext={true}
          />
        </div>
      </div>
    );
  }
}

export default OrderEntry;
