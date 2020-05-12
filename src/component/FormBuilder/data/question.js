const addQuestion = {
  text: {
    question: "",
    placeholder: "",
    type: "text",
    name: "Text",
    helpText: "",
    validation: {
      isRequired: false,
      fileUploadRequired: false,
    },
  },
  number: {
    question: "",
    placeholder: "",
    type: "number",
    name: "Number",
    helpText: "",
    validation: {
      isRequired: false,
      fileUploadRequired: false,
    },
  },
  upload: {
    question: "",
    placeholder: "",
    helpText: "",
    type: "upload",
    name: "Upload",
    validation: {
      isRequired: false,
    },
  },
  checkbox: {
    question: "",
    placeholder: "",
    helpText: "",
    data: [],
    type: "checkbox",
    name: "Checkbox",
    validation: {
      isRequired: false,
    },
  },

  select: {
    question: "",
    placeholder: "",
    helpText: "",
    data: [],
    type: "select",
    name: "Select",
    validation: {
      isRequired: false,
    },
  },

  multiple_checkbox: {
    question: "",
    placeholder: "",
    helpText: "",
    type: "multiple_checkbox",
    name: "Multiple CheckBox",
    validation: {
      isRequired: false,
      fileUploadRequired: false,
    },
  },

  date: {
    question: "",
    placeholder: "",
    helpText: "",
    type: "date",
    name: "Date",
    validation: {
      isRequired: false,
    },
  },
};

export default addQuestion;
