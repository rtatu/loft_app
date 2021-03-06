import React from "react";
import SearchBar from "../General/SearchBar";
import "./umh.sass";
import { Header } from "../General/Header";
import PrimaryButton from "../General/Buttons/PrimaryButton";
import ActionContext from "../General/Buttons/ActionContext";

/**
 * @param title -> Title of the header
 * @param handleSearch -> handleSearchBar
 * @param onPressAddNew -> Add New Button onPress
 * @param onPressContext -> Three DOT onPress
 */

class UserManagementHeader extends React.Component {
  render() {
    return (
      <div className={"oeh-container"}>
        <Header label={this.props.title} />
        <SearchBar
          style={{
            width: "50%",
            marginLeft: 50,
          }}
          placeholder="Search for users"
        />
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <PrimaryButton text={"Add New User"} onPress={this.props.addNew} />
          <ActionContext />
        </div>
      </div>
    );
  }
}

export default UserManagementHeader;
