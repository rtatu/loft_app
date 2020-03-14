import formikUtils from "../../utils/formikUtils";
/**
 * returns "General" -> "general"
 * "Truck Registration" -> "truckRegistration"
 */
String.prototype.lowerCaseFirstLetter = function() {
  return this.split(" ")
    .map((item, index) => (index == 0 ? item.toLocaleLowerCase() : item))
    .join("");
};

const config = {
  mapPropsToValues: props => {
    const formHeader = props.formheader[props.formName];
    const values = formikUtils.mapPropsToValueCombinedWithEdit(
      formHeader,
      props.data ? props.data : {}
    );
    return values;
  },
  validate: (values, formikBag) => {
    return {};
  },
  validateOnBlur: true,

  handleSubmit: (values, formikBag) => {
    let keys = Object.keys(values);
    let data = formikUtils.mapValuesToData(values);

    // check if the table is being edited

    formikBag.setSubmitting(true);

    if (formikBag.props.data) {
      data["id"] = formikBag.props.data.id;
      formikBag.props.updateInList(data).then(res => {
        console.log(res);
        formikBag.setSubmitting(false);
      });
    } else {
      formikBag.props.addToList(data).then(res => {
        console.log(res);
        formikBag.setSubmitting(false);
      });
    }

    // if edited then updateToList

    // else add the data to the table
  }
};

export default config;
