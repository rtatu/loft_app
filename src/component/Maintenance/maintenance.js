import React from "react";
import SearchBar from "../General/SearchBar";
import "./maintenance.sass";
import AddNewCard, { SurveyCard } from "../General/AddNewCard";
import { withRouter } from "react-router-dom";

const STATUS_COLOR = {
  ALL: "#507DF0",
  DRAFT: "rgba(242, 233, 78, 1)",
  PUBLISHED: "rgba(104, 237, 198, 1)",
};

class Maintenance extends React.Component {
  state = {
    filter: "ALL",
  };

  navigateToFB = (e, id) => {
    if (!id) this.props.history.push("/formBuilder");

    this.props.history.push(`/formBuilder/${id}`);
  };

  componentDidMount() {
    if (this.props.loading) {
      this.props.fetchForms();
    }
  }

  handleFilter = (e, filter) => {
    this.setState({ filter });
    this.filterForms(filter);
  };

  handleSearch = (text) => {
    this.filterForms(text);
  };

  filterForms = (text) => {
    let searchRegex = new RegExp(`^${text}`, "i");
    let cards = document.getElementsByClassName("an-card");
    Array.from(cards).forEach((item) => {
      let tags = [item.dataset.status, item.dataset.name];

      if (text == "ALL") {
        item.style.display = "flex";
        return;
      }

      if (searchRegex.test(tags[0]) || searchRegex.test(tags[1]))
        item.style.display = "flex";
      else item.style.display = "none";
    });
  };

  render() {
    let forms = this.props.forms;
    console.log(forms, "check");
    return (
      <div className="mh-container">
        <div className="mh-header">
          <SearchBar
            placeholder={"Search Form Name"}
            handleSearch={this.handleSearch}
          />
          <div className="mh-filter">
            {Object.keys(STATUS_COLOR).map((item, index) => (
              <span
                onClick={(e) => this.handleFilter(e, item)}
                key={index}
                style={{
                  borderColor:
                    this.state.filter == item ? STATUS_COLOR[[item]] : "",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mh-forms">
          <AddNewCard navigateToFB={this.navigateToFB} />
          {forms &&
            Object.keys(forms).map((item, index) => (
              <SurveyCard
                data={forms[item]}
                key={index}
                navigateToFB={this.navigateToFB}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Maintenance);
