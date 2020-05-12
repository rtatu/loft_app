import text from "../../../static/icon/fb-fields/text.svg";
import checkbox from "../../../static/icon/fb-fields/checkbox.svg";
import date from "../../../static/icon/fb-fields/date.svg";
import multiple_checkbox from "../../../static/icon/fb-fields/multiple_checkbox.svg";
import number from "../../../static/icon/fb-fields/number.svg";
import upload from "../../../static/icon/fb-fields/uploads.svg";
import select from "../../../static/icon/fb-fields/select.svg";

const QuestionFields = [
  {
    title: "Text",
    icon: text,
    helpText: "Single line or multiline text area",
    name: "text",
  },
  {
    title: "Select from list",
    icon: select,
    helpText: "Select from options",
    name: "select",
  },
  {
    title: "Single Selection",
    icon: checkbox,
    helpText: "Check only one item",
    name: "checkbox",
  },
  {
    title: "Multiple Selection",
    icon: multiple_checkbox,
    helpText: "Check multiple options",
    name: "multiple_checkbox",
  },
  {
    title: "Date",
    icon: date,
    helpText: "Select date",
    name: "date",
  },
  {
    title: "Number",
    icon: number,
    helpText: "It accepts only numbers",
    name: "number",
  },
  {
    title: "Upload",
    icon: upload,
    helpText: "Upload document or media",
    name: "upload",
  },
];

export default QuestionFields;
