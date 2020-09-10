import React from "react";
import "./form.sass";
import getComponent from "../../utils/get_react_comp";
import { Form, getIn } from "formik";
import Loader from "../General/Loader";
import get_In, {
  checkDisable,
  showOn,
  retreiveDatastoreData,
} from "../../utils/data_functions";

const Component = (props) => {
  return props.show ? { ...props.children } : null;
};

const showSections = (e) => {
  const sections = document.getElementsByClassName("form-section");
  const sectionsNav = document.getElementsByClassName("form-nav");
  let index = parseInt(e.target.dataset.index);
  for (let i = 0; i < sections.length; i++) {
    if (i == index) {
      sections[i].classList.remove("hide");
      sectionsNav[i].classList.add("header-active");
    } else {
      sections[i].classList.add("hide");
      sectionsNav[i].classList.remove("header-active");
    }
  }

  // resize events
  let form = document.getElementsByClassName("genform")[0];
  let width = 800;
  let height = form.offsetHeight + 100;

  electronRemote.getCurrentWindow().setSize(width, height);
};

const ConditionalWrapper = (data, item, props, values) =>
  Array.isArray(data[item]) ? (
    <React.Fragment>
      {data[item].map((nested_item, nested_index) => (
        <Component
          show={showOn(nested_item.showOn, values[`${item}`])}
          key={
            nested_item.changeOn
              ? `${nested_index}.${
                  nested_item.labelChange[values[item][nested_item.changeOn]]
                }`
              : nested_index
          }
        >
          <nested_item.component
            key={
              nested_item.changeOn
                ? `${nested_index}.${
                    nested_item.labelChange[values[item][nested_item.changeOn]]
                  }`
                : nested_index
            }
            name={`${item}.${nested_item.name}`}
            handleChange={props.handleChange}
            value={values[`${item}`][`${nested_item.name}`]}
            label={
              nested_item.changeOn
                ? nested_item.labelChange[values[item][nested_item.changeOn]]
                : nested_item.label
            }
            defaultValue={nested_item.defaultValue}
            data={retreiveDatastoreData(
              nested_item,
              props.datastore,
              values[`${item}`]
            )}
            autofillProp={nested_item.autofillProp}
            readOnly={nested_item.readOnly ? nested_item.readOnly : false}
            setFieldsValue={props.setFieldValue}
            country={values[`${item}`]["country"]}
            fill={
              nested_item.autoFillAnotherProps &&
              `${item}.${nested_item.autoFillAnotherProps.fill}`
            }
            with={
              nested_item.autoFillAnotherProps &&
              nested_item.autoFillAnotherProps.with
            }
            error={getIn(props.errors, `${item}.${nested_item.name}`)}
            disabled={checkDisable(nested_item.disabledOn, values[`${item}`], nested_item.expectedValues,nested_item.disabled)}
            min={nested_item.min}
            max={nested_item.max}
          />
        </Component>
      ))}
    </React.Fragment>
  ) : item == "Notes" ? (
    <data.Notes.component
      name={item}
      value={values[item]}
      {...props}
      render={data[item].render}
      setFieldsValue={props.setFieldValue}
    />
  ) : null;

const GeneralForm = (props) => {
  let data = props.formheader[props.formName];
  let keys = Object.keys(data); // keys reference to check if  address exists
  let header_keys = keys.filter((item) => (item != "Address" ? item : null)); // different key for not including "Address"
  let values = props.values;

  return (
    <div className="form">
      <form className="genform" onSubmit={props.handleSubmit}>
        {header_keys.length != 1 ? (
          <div className="form-header">
            {header_keys.map((item, index) => (
              <div
                key={index}
                className={index == 0 ? " form-nav header-active" : "form-nav"}
                data-index={index}
                onClick={showSections}
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}

        {header_keys.map((item, index) => (
          <div
            key={index}
            className={
              index == 0
                ? "form-section"
                : Array.isArray(data[item])
                ? "form-section hide"
                : "form-section hide standalone"
            }
          >
            {ConditionalWrapper(data, item, props, values)}
            {index == 0 // Rendering Address after index 0
              ? keys.includes("Address")
                ? ConditionalWrapper(data, "Address", props, values)
                : null
              : null}
          </div>
        ))}

        <div className="form-action">
          <button className="discard" type="button">
            Discard Changes
          </button>
          <button className="save" type="submit">
            Save
          </button>
        </div>
      </form>
      {/* <Loader show={props.isSubmitting} /> */}
    </div>
  );
};

export default GeneralForm;
