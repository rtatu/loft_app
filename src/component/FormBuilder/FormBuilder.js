import React from "react";
import FormTitle from "./FormTitle";
import "./fb.sass";
import FormDropZone from "./FormDropZone";
import FormFieldSideBar from "./FormFieldSideBar";
import addQuestion from "./data/question";
import { withRouter } from "react-router-dom";
import Loader from "../General/Loader";

class FormBuilder extends React.Component {
  state = {
    isEditingIndex: -1,
    questions: (this.props.formData && this.props.formData.questions) || [],
    name: this.props.formData && this.props.formData.name,
    loading: false,
  };

  constructor(props) {
    super(props);

    this.dropZoneRef = React.createRef();
  }

  addQuestion = (type) => {
    let question = addQuestion[type];

    let questions = [...this.state.questions];

    questions.push(question);

    this.setState({ questions }, () => {
      this.dropZoneRef.current.scrollTop = this.dropZoneRef.current.scrollHeight;
    });
  };

  setEditQuestion = (index) => {
    this.setState({ isEditingIndex: index });
  };

  stopEditing = (e) => {
    console.log("clicked outside");
    this.setState({ isEditingIndex: -1 });
  };

  editQuestionProperties = (name, index, value) => {
    // console.log(name, index, value);

    let newQp = { ...this.state.questions[index] };
    newQp[name] = value;

    let questions = [...this.state.questions];

    questions[index] = newQp;

    this.setState({ questions });
  };

  addQuestionValidation = (name, index, value) => {
    let newQp = { ...this.state.questions[index] };

    newQp["validation"] = { ...newQp["validation"] };
    newQp["validation"][name] = value;

    let questions = [...this.state.questions];

    questions[index] = newQp;

    this.setState({ questions }, () => console.log(this.state));
  };

  removeQuestion = (index) => {
    let questions = [...this.state.questions];

    questions.splice(index, 1);

    this.setState({ isEditingIndex: -1, questions });
  };

  handleNameChange = (e) => {
    let value = e.target.value;
    this.setState({ name: value });
  };

  handleAction = async (action) => {
    this.setState({ loading: true });
    let res;
    switch (action) {
      case "CANCEL":
        this.props.history.push("/maintenance");
        break;
      case "SAVE AS DRAFT":
        if (this.props.formData) {
          res = await this.props.updateForm({
            name: this.state.name,
            status: "DRAFT",
            questions: this.state.questions,
            id: this.props.formData.id,
          });
        } else {
          res = this.props.createForm({
            name: this.state.name,
            status: "DRAFT",
            questions: this.state.questions,
          });
        }
        break;
      case "PUBLISH":
        if (this.props.formData) {
          res = await this.props.updateForm({
            name: this.state.name,
            status: "PUBLISHED",
            questions: this.state.questions,
            id: this.props.formData.id,
          });
        } else {
          res = this.props.createForm({
            name: this.state.name,
            status: "PUBLISHED",
            questions: this.state.questions,
          });
        }
        break;
      default:
        break;
    }
    if (res) {
      this.setState({ loading: false }, () => {
        this.props.history.push("/maintenance");
      });
    }
  };

  render() {
    return (
      <div className="fb-container">
        <FormTitle
          name={this.state.name}
          handleName={this.handleNameChange}
          handleClick={this.handleAction}
        />
        <div className="fb-main">
          <FormDropZone
            setEditQuestion={this.setEditQuestion}
            stopEditing={this.stopEditing}
            isEditingIndex={this.state.isEditingIndex}
            addQuestion={this.addQuestion}
            questions={this.state.questions}
            dropZoneRef={this.dropZoneRef}
          />
          <FormFieldSideBar
            isEditingIndex={this.state.isEditingIndex}
            stopEditing={this.stopEditing}
            questionProperties={this.state.questions[this.state.isEditingIndex]}
            editQuestionProperties={this.editQuestionProperties}
            addQuestionValidation={this.addQuestionValidation}
            removeQuestion={this.removeQuestion}
          />
        </div>
        <Loader show={this.state.loading} />
      </div>
    );
  }
}

export default withRouter(FormBuilder);
