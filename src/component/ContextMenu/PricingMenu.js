import React from "react";
import { Actions } from "./ContextMenuType/ItemPricing";
import "./ContextMenu.sass";
import Axios from "axios";
import cogoToast from "cogo-toast";

class PricingMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="contextMenu"
        style={{
          left: this.props.X,
          top: this.props.Y,
          zIndex: 100,
          height: 60,
        }}
      >
        <ul>
          {Actions.map((menuItem, index) => (
            <menuItem.component
              name={menuItem.label}
              key={index}
              icon={menuItem.icon}
              onPress={(e) => {
                Axios({
                  url:
                    process.env.BASE_API_URL + "/archive/itemPricing/sendmail",
                  method: "POST",
                })
                  .then((res) => {
                    if (res.data.code == "UPDATE_SUCC") {
                      cogoToast.success(
                        "Mail successfully sent to all vendors for quotes"
                      );
                      this.props.setShow(false);
                    }
                  })
                  .catch((err) => {
                    cogoToast.error("Try again later");
                    this.props.setShow(false);
                  });
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PricingMenu;
