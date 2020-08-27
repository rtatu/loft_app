import React from "react";
import SearchBar from "../General/SearchBar";
import { Header } from "../General/Header";
import PrimaryButton from "../General/Buttons/PrimaryButton";
import ActionContext from "../General/Buttons/ActionContext";

/**
 * @param title -> Title of the header
 * @param handleSearch -> handleSearchBar
 * @param onPressAddNew -> Add New Button onPress
 * @param onPressContext -> Three DOT onPress
 */

class SafetyHeader extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: '10px',
        }}
      >
        <Header label={this.props.title} />
        <SearchBar
          style={{
            width: "50%",
            marginLeft: 50,
          }}
          placeholder="Search for safety items"
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <PrimaryButton text={"Add New Item"} onPress={() => true} />
          <ActionContext />
        </div>
      </div>
    );
  }
}

export default SafetyHeader;
