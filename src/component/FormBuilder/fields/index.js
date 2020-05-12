import React from "react";

// import fields
import FbFieldText from "./Text";
import FbFieldSelect from "./Select";
import FbFieldDate from "./Date";
import FbFieldNumber from "./Number";
import FbFieldFileUpload from "./FileUpload";
import FbFieldCheckBox from "./CheckBox";

class QuestionField extends React.Component {
  getQuestionField = () => {
    switch (this.props.type) {
      case "text":
        return (
          <FbFieldText
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );

      case "select":
        return (
          <FbFieldSelect
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            options={this.props.options}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );

      case "checkbox":
        return (
          <FbFieldCheckBox
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            options={this.props.options}
            editQuestion={this.props.editQuestion}
          />
        );

      case "multiple_checkbox":
        return (
          <FbFieldCheckBox
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            options={this.props.options}
            isMulti={true}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );
      case "number":
        return (
          <FbFieldNumber
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );

      case "upload":
        return (
          <FbFieldFileUpload
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );
      case "date":
        return (
          <FbFieldDate
            question={this.props.question}
            index={this.props.index}
            isEditing={this.props.isEditing}
            editQuestion={this.props.editQuestion}
            isRequired={this.props.isRequired}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return this.getQuestionField();
  }
}

export default QuestionField;

export {
  FbFieldText,
  FbFieldSelect,
  FbFieldDate,
  FbFieldNumber,
  FbFieldFileUpload,
  FbFieldCheckBox,
};
