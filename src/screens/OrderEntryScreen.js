import React from "react";
import OrderEntry from "../component/OrderEntry";
import Base from "../container/base";

const OrderEntryScreen = (props) => {
  return (
    <Base>
      <OrderEntry {...props} />
    </Base>
  );
};

export default OrderEntryScreen;
