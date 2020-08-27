import React from "react";
import "./header.sass";
import { connect } from "react-redux";
import Image from "../General/Image";

// add images

import search from "./../../static/icon/search.svg";
import notification from "./../../static/icon/notification.svg";

const ViewHeader = (props) => (
  <div className="header">
    <div className="header-search">
      <Image source={search} />
      <input
        placeholder="Search for lists name, tables and help..."
        type="text"
      />
    </div>

    <div className="header-profile">
      <Image
        src={{
          url: `${process.env.BASE_API_URL}${props.user.data.profile}`,
          header: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }}
      />
      <div className="user-info">
        <p className="user-name">
          {props.user &&
            props.user.data &&
            `${props.user.data.firstName} ${props.user.data.lastName}`}
        </p>
        <p className="user-role">Database Administrator</p>
      </div>
    </div>

    <Image source={notification} />
  </div>
);

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(ViewHeader);
