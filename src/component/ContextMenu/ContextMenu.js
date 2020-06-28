import React from "react";
import { DataTableContextMenu } from "./ContextMenuType/Base";
import "./ContextMenu.sass";

class ContextMenu extends React.Component {
  render() {
    return (
      <div
        id="contextMenu"
        style={{
          left: this.props.X,
          top: this.props.Y,
        }}
      >
        {DataTableContextMenu.map((section, index) => (
          <ul key={index}>
            {section.map((menuItem, nIndex) => (
              <menuItem.component
                name={menuItem.label}
                key={nIndex}
                icon={menuItem.icon}
                onPress={(e) => this.props.handleContextMenu(e, menuItem.prop)}
              />
            ))}
          </ul>
        ))}
      </div>
    );
  }
}

export default ContextMenu;
