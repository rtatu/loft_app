import React from "react";

const FieldHOC = (Field) => {
  return class FbField extends React.Component {
    editQuestionProperties = (e) => {
      e.stopPropagation();
      this.props.editQuestion(this.props.index);
    };

    render() {
      let label =
        (this.props.question == "" ? "Question" : this.props.question) +
        `${this.props.isRequired ? " *" : ""}`;

      return (
        <div
          className="fbFields-container"
          style={this.props.isEditing ? { border: "1px solid #507DF0" } : {}}
          onClick={this.editQuestionProperties}
        >
          <label>{label}</label>
          <Field {...this.props} />
        </div>
      );
    }
  };
};

export default FieldHOC;
