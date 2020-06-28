import React from "react";
import "./mc.sass";
import SearchBar from "../General/SearchBar";
import add from "../../static/icon/svg/add.svg";
import Datatable from "../Datatable";
import DatatableEvents from "../Datatable/datatable_renderer_events";

const sections = ["billing", "contact"];

class ManageContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNav: "billing",
    };
  }

  componentDidMount() {
    this.resizeWindow();
  }

  showSections = (e, name) => {
    const sectionsNav = document.getElementsByClassName("mc-head");
    let index = parseInt(e.target.dataset.index);
    for (let i = 0; i < sections.length; i++) {
      if (i == index) {
        sectionsNav[i].classList.add("mc-active");
      } else {
        sectionsNav[i].classList.remove("mc-active");
      }
    }
    this.setState({ activeNav: name });
    this.resizeWindow();
  };

  resizeWindow = () => {
    // resize events
    let form = document.getElementsByClassName("mc-container")[0];
    let width = 800;
    let height = form.offsetHeight + 100;

    electronRemote.getCurrentWindow().setSize(width, height);
  };

  renderSection = () => {
    return sections.map((item, index) => {
      return item == this.state.activeNav ? (
        <div className="mc-section" key={index}>
          <Datatable
            tableName={item}
            navigate={"customers"}
            data={this.props[item]}
            loading={false}
            hideHeaderNav={true}
            hideContext={true}
          />
        </div>
      ) : null;
    });
  };

  handleAddEvent = (e) => {
    let name = this.state.activeNav;
    DatatableEvents.newForm(e, `customers/${name}`);
  };

  render() {
    let name = this.state.activeNav;

    return (
      <div className="mc-container">
        <div className="mc-header">
          <div
            className="mc-head mc-active"
            data-index={0}
            onClick={(e) => this.showSections(e, "billing")}
          >
            Billing Location
          </div>
          <div
            className="mc-head"
            data-index={1}
            onClick={(e) => this.showSections(e, "contact")}
          >
            Contacts
          </div>
        </div>

        <div className="mc-section-header">
          <SearchBar
            placeholder={`Search for ${
              name.charAt(0).toUpperCase() + name.slice(1)
            }`}
          />
          <div className="mc-add" onClick={this.handleAddEvent}>
            <img src={add} />
            <span>{`Add New ${
              name.charAt(0).toUpperCase() + name.slice(1)
            }`}</span>
          </div>
        </div>
        {this.renderSection()}
      </div>
    );
  }
}

export default ManageContact;
