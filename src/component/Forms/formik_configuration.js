import formikUtils from "../../utils/formikUtils";
import YupValidationSchema from "./validationSchema";
/**
 * returns "General" -> "general"
 * "Truck Registration" -> "truckRegistration"
 */

String.prototype.lowerCaseFirstLetter = function () {
  return this.split(" ")
    .map((item, index) => (index == 0 ? item.toLocaleLowerCase() : item))
    .join("");
};

const config = {
  mapPropsToValues: (props) => {
    const formHeader = props.formheader[props.formName];
    const values = formikUtils.mapPropsToValueCombinedWithEdit(
      formHeader,
      props.data ? props.data : {}
    );
    console.log(values, "starting values");
    return values;
  },
  validationSchema: (props) => {
    let schema = YupValidationSchema(
      props.formheader[props.formName],
      props.datastore,
      false
    );
    return schema;
  },
  validateOnChange: true,
  handleSubmit: (values, formikBag) => {
    console.log(values);
    // let keys = Object.keys(values);
    // let data = formikUtils.mapValuesToData(values);
    // // check if the table is being edited
    // return;
    // formikBag.setSubmitting(true);
    // if (formikBag.props.data) {
    //   data["id"] = formikBag.props.data.id;
    //   formikBag.props
    //     .updateInList(data)
    //     .then((res) => {
    //       formikBag.setSubmitting(false);
    //       electronRemote.getCurrentWindow().close();
    //     })
    //     .catch((err) => {
    //       cogoToast.error(err);
    //     });
    // } else {
    //   formikBag.props
    //     .addToList(data)
    //     .then((res) => {
    //       formikBag.setSubmitting(false);
    //       electronRemote.getCurrentWindow().close();
    //     })
    //     .catch((err) => {
    //       cogoToast.error(err);
    //     });
    // }
  },
};

export default config;
