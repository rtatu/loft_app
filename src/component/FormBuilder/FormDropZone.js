import React from "react";
import "./styles/FbDropZone.sass";
import QuestionField, { FbFieldText, FbFieldSelect } from "./fields";

class FormDropZone extends React.Component {
  componentDidMount() {
    this.dropzone = document.getElementsByClassName("fb-dropzone")[0];

    this.dropzone.addEventListener("dragover", this.dropZoneOver);
    this.dropzone.addEventListener("dragenter", this.dropZoneEnter);
    this.dropzone.addEventListener("dragleave", this.dropZoneLeave);
    this.dropzone.addEventListener("drop", (e) => this.dropZoneDrop(e));
  }

  render() {
    return (
      <div className="fb-dropzone">
        <div
          className="fb-questions"
          onClick={this.props.stopEditing}
          ref={this.props.dropZoneRef}
        >
          {this.props.questions &&
            this.props.questions.map((item, index) => (
              <QuestionField
                question={item.question}
                type={item.type}
                index={index}
                isEditing={this.props.isEditingIndex == index}
                key={index}
                editQuestion={this.props.setEditQuestion}
                options={item.data}
                isRequired={item.validation.isRequired}
              />
            ))}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.dropzone.removeEventListener("dragover", this.dropZoneOver);
    this.dropzone.removeEventListener("dragenter", this.dropZoneEnter);
    this.dropzone.removeEventListener("dragleave", this.dropZoneLeave);
    this.dropzone.removeEventListener("drop", this.dropZoneDrop);
  }
}

// dropzone related function

FormDropZone.prototype.dropZoneEnter = function (e) {
  console.log("entered");
};

FormDropZone.prototype.dropZoneOver = function (e) {
  e.preventDefault();
  console.log("over");
};

FormDropZone.prototype.dropZoneLeave = function (e) {
  console.log("leave");
};

FormDropZone.prototype.dropZoneDrop = function (e) {
  let questionType = e.dataTransfer.getData("type");
  this.props.addQuestion(questionType);
};

export default FormDropZone;
