import React from "react";
import "./styles/FbSideBar.sass";
import SearchBar from "../General/SearchBar";
import QuestionFields from "./data/fields";
import Switch from "../General/Switch/";
import Essentials from "./EditQuestion.js/Essentials";
import RemoveQuestion from "./EditQuestion.js/RemoveField";
import TopBar from "./EditQuestion.js/TopBar";
import AddData from "./EditQuestion.js/AddData";

// temporary validation

const TEMP_VALID = {
  isRequired: "Required",
  fileUploadRequired: "Document Upload Required",
};

const Fields = ({ handleSearch, fieldDragStart }) => (
  <React.Fragment>
    <SearchBar
      placeholder={"Search For Fields"}
      style={{ width: "280px", height: "35px", marginTop: "10px" }}
      handleSearch={handleSearch}
    />
    <div className="fb-fields">
      {QuestionFields.map((field, index) => (
        <div
          key={index}
          className="fb-q-container"
          data-search={field.title}
          data-tag={field.name}
          draggable={true}
          onDragStart={fieldDragStart}
        >
          <img src={field.icon} />
          <div>
            <p>{field.title}</p>
            <span>{field.helpText}</span>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
);

const EditProperties = (props) => {
  return (
    <React.Fragment>
      <TopBar goBack={props.goBack} type={props.questionProperties.name} />
      <Essentials
        index={props.index}
        question={props.questionProperties.question}
        placeholder={props.questionProperties.placeholder}
        helpText={props.questionProperties.helpText}
        handleChange={props.editQuestionProperties}
      />
      {props.questionProperties.data ? (
        <AddData
          index={props.index}
          handleChange={props.editQuestionProperties}
          data={props.questionProperties.data}
        />
      ) : null}
      <div className="fb-ed-switch">
        {Object.keys(props.questionProperties.validation).map((item, index) => (
          <Switch
            label={TEMP_VALID[item]}
            id={index}
            checked={props.questionProperties.validation[item]}
            handleChange={props.addQuestionValidation}
            name={item}
            index={props.index}
            key={index}
          />
        ))}
      </div>
      <RemoveQuestion
        removeQuestion={props.removeQuestion}
        index={props.index}
      />
    </React.Fragment>
  );
};

class FormFieldSideBar extends React.Component {
  filterFields = (text) => {
    let searchRegex = new RegExp(`^${text}`, "i");
    let questionFields = document.getElementsByClassName("fb-q-container");
    Array.from(questionFields).forEach((item) => {
      let tags = [item.dataset.search, item.dataset.tag];
      if (searchRegex.test(tags[0]) || searchRegex.test(tags[1]))
        item.style.display = "flex";
      else item.style.display = "none";
    });
  };

  fieldDragStart = (e) => {
    let type = e.target.dataset.tag;
    console.log(type, e);
    e.dataTransfer.setData("type", type);
  };

  fieldDragEnd = () => {};

  render() {
    return (
      <div className="fb-sidebar">
        {this.props.isEditingIndex !== -1 ? (
          <EditProperties
            goBack={this.props.stopEditing}
            questionProperties={this.props.questionProperties}
            index={this.props.isEditingIndex}
            editQuestionProperties={this.props.editQuestionProperties}
            addQuestionValidation={this.props.addQuestionValidation}
            removeQuestion={this.props.removeQuestion}
          />
        ) : (
          <Fields
            handleSearch={this.filterFields}
            fieldDragStart={this.fieldDragStart}
          />
        )}
      </div>
    );
  }
}

export default FormFieldSideBar;
