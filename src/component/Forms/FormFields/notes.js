import React from "react";
import "./notes.sass";

// add icon
import attachment_added from "../../../static/icon/attachment_added.svg";
import add_attachment from "../../../static/icon/attachment_add.svg";
import send from "../../../static/icon/send.svg";

// add avatar
import current from "../../../static/avatar_user.jpg";
import another from "../../../static/avatar_current.png";

const CURRENT_USER = "Rohit Tatu";

const NotesJSX = props => (
  <div className="notes_container">
    <div className="notes_data" ref={props.lastChild}>
      {props.data.map((item, index) => (
        <div
          className={
            CURRENT_USER == item.user ? "notes_message right" : "notes_message"
          }
          key={index}
        >
          <img
            src={CURRENT_USER == item.user ? current : another}
            className="notes_user_profile"
          />
          <div>
            <span>{item.user}</span>
            {item.message !== null ? (
              <div className="message">
                <p>{item.message}</p>
              </div>
            ) : item.attachment !== null ? (
              <div className="attachment">
                <img src={attachment_added} />
                <span>{item.attachment.name}</span>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>

    <div className="notes_input">
      <div>
        <img src={add_attachment} />
        <input
          type="text"
          placeholder="Enter your message"
          ref={props.inputRef}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
      <img src={send} onClick={props.saveChanges} />
    </div>
  </div>
);

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.inputRef = React.createRef();
  }

  saveChanges = () => {
    let val = this.inputRef.current.value;
    this.props.push({
      user: CURRENT_USER,
      message: val,
      attachment: null
    });
    this.setState({ value: "" });
  };

  handleChange = e => {
    let value = e.target.value;
    this.setState({ value });
  };
  render() {
    return (
      <NotesJSX
        {...this.props}
        inputRef={this.inputRef}
        saveChanges={this.saveChanges}
        value={this.state.value}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Notes;
