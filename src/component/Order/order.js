import React from "react";
import "./order.sass";
import OrderHeader from "./orderheader";
import Down from "./../../static/icon/down.svg";
import Reorder from "./reorder";

const OrderLegData = [
  {
    legsummary: [
      {
        label: "Pickup From",
        value:
          "Toronto City Hall 100 Queen St W, Toronto, Ontario M5H 2N1,Canada"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "Texas, USA"
      },
      {
        label: "At",
        value: "0"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: "",
        event: {
          name: "pickup",
          id: "3",
          position: "before"
        }
      },
      to: {
        name: "",
        id: ""
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "Queen St W, Toronto, Ontario M5H 2N1,Canada"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "New York,NYC,USA"
      },
      {
        label: "At",
        value: "1"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: "",
        event: {
          name: "pickup",
          id: "3",
          position: "before"
        }
      },
      to: {
        name: "",
        id: ""
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "City Hall 100 Queen St W, Toronto, Ontario M5H 2N1,Canada"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "California, USA"
      },
      {
        label: "At",
        value: "2"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: "",
        event: {
          name: "delivery",
          id: "3",
          position: "before"
        }
      },
      to: {
        name: "",
        id: ""
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "Toronto Hall 100 Queen St W, M5H 2N1,Canada"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "San Antanio, USA"
      },
      {
        label: "At",
        value: "3"
      }
    ],
    datasets: {
      from: {
        name: "pickup",
        id: "3"
      },
      to: {
        name: "",
        id: ""
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "Silicon Valley, USA"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "Toronto, Ontario, Canada"
      },
      {
        label: "At",
        value: "4"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: "",
        event: {
          name: "delivery",
          id: "3",
          position: "after"
        }
      },
      to: {
        name: "",
        id: ""
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "San Antanio Bay, USA"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "Ohio, Canada"
      },
      {
        label: "At",
        value: "5"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: ""
      },
      to: {
        name: "delivery",
        id: "3"
      }
    }
  },
  {
    legsummary: [
      {
        label: "Pickup From",
        value: "Sector-102, Gurgaon, Canada"
      },
      {
        label: "At",
        value: "9:00, 21-07-2019"
      },
      {
        label: "Deliver To",
        value: "Manali, HP"
      },
      {
        label: "At",
        value: "6"
      }
    ],
    datasets: {
      from: {
        name: "",
        id: ""
      },
      to: {
        name: "",
        id: "",
        event: {
          name: "delivery",
          id: "3",
          position: "after"
        }
      }
    }
  }
];

const navigate = e => {
  let ind = e.target.dataset.nav;
  let section = document.getElementsByClassName("order-section");
  if (ind == 0) {
    section[0].style.display = "grid";
    section[1].style.display = "none";
  } else {
    section[1].style.display = "block";
    section[0].style.display = "none";
  }

  let navs = document.querySelectorAll(".order-nav > ul > li");
  for (let nav of navs) {
    if (nav == e.target) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }
};

const expand = e => {
  e.preventDefault();
  if (
    e.target.parentElement.parentElement.parentElement.parentElement.style
      .maxHeight != "600px"
  ) {
    e.target.parentElement.parentElement.parentElement.parentElement.style.maxHeight =
      "600px";
  } else {
    e.target.parentElement.parentElement.parentElement.parentElement.style.maxHeight =
      "62px";
  }
  // e.target.parentElement.parentElement.style.height = "600px";
};

const OrderJSX = () => (
  <div className="order">
    <form className="order-form">
      <div className="order-summary">
        <h1>Order #78654</h1>
        <div className="order-gen-summary">
          <div>
            <span>Customer</span>
            <span>Rohit Tatu</span>
          </div>
          <div>
            <span>Invoice To</span>
            <span>Jaimal Singh</span>
          </div>
          <div>
            <span>Invoice No.</span>
            <span>321567</span>
          </div>
        </div>
      </div>
      <div className="order-nav">
        <ul>
          <li onClick={navigate} data-nav={0}>
            General
          </li>
          <li className="active" onClick={navigate} data-nav={1}>
            Order Leg
          </li>
          <li>Billing</li>
          <li>Notification</li>
          <li>Customs</li>
          <li>Attachment</li>
          <li>Notes</li>
        </ul>
      </div>
      <div className="order-section order-general hide">
        {OrderHeader["General"].map((item, index) => (
          <item.component label={item.label} key={index} />
        ))}
      </div>

      <div className="order-section order-leg">
        {OrderLegData.map((item, index) => (
          <div
            className="leg"
            draggable={true}
            data-order={index}
            data-from={JSON.stringify(item.datasets.from)}
            data-to={JSON.stringify(item.datasets.to)}
            key={index}
          >
            <div className="leg-list">
              <ul>
                {item.legsummary.map((item, nest_index) => (
                  <li key={nest_index}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </li>
                ))}
                <li key={index}>
                  <img src={Down} onClick={expand} />
                </li>
              </ul>
            </div>
            <div className="leg-form">
              <div>
                <h1>From</h1>
                <div className="leg-pickup">
                  {OrderHeader["Order Leg Pickup"].map((item, index) => (
                    <item.component label={item.label} key={index} />
                  ))}
                </div>
                <a href="">Add Comodity</a>
              </div>

              <div>
                <h1>To</h1>
                <div className="leg-pickup">
                  {OrderHeader["Order Leg Delivery"].map((item, index) => (
                    <item.component label={item.label} key={index} />
                  ))}
                </div>
                <a href="">Comodity To Deliver</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  </div>
);

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OrderJSX />;
  }
}

Order.prototype.componentDidMount = function() {
  this.orderleg = new Reorder("leg");
  this.orderleg.startReordering();
};

Order.prototype.componentWillMount = function() {
  if (this.orderleg) {
    this.orderleg.stopReordering();
  }
};

export default Order;
