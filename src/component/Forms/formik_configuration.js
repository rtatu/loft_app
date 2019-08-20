const config = {
  mapPropsToValues: props => {
    // props -> formName
    const values = {};
    const formHeader = props.formheader[props.formName];
    const headerKeys = Object.keys(formHeader);

    for (let key of headerKeys) {
      if (Array.isArray(formHeader[key])) {
        for (let obj of formHeader[key]) {
          values[key] = { ...values[key] };
          values[`${key}`][`${obj.name}`] = obj.value || obj.defaultValue || "";
        }
      }
    }

    console.log(values);
    // reutrn the mapping of propsToValue
    return values;
  },
  validate: (values, formikBag) => {
    // validate values
    return {};
  },
  validateOnBlur: true,

  handleSubmit: (values, { setSubmitting }) => {
    // handle submittion of the form

    console.log(values);
  }
};

export default config;
