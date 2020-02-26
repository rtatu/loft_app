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
    console.log(formikUtils.mapValuesToData(values), "new");
  }
};

export default config;
