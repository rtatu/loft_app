import React from "react";
import "./form.sass";
import getIn from "../../utils/data_functions";
import getComponent from "../../utils/get_react_comp";
import { Form } from "formik";

let selectdata = [
  { name: "Rajah" },
  { name: "Burke" },
  { name: "Wesley" },
  { name: "Alan" },
  { name: "Cooper" },
  { name: "Drake" },
  { name: "Roth" },
  { name: "Fitzgerald" },
  { name: "Ashton" },
  { name: "Tobias" },
  { name: "Linus" },
  { name: "Garrison" },
  { name: "Nasim" },
  { name: "Keith" },
  { name: "Sawyer" },
  { name: "Lamar" },
  { name: "Eaton" },
  { name: "Garth" },
  { name: "Francis" },
  { name: "Kyle" },
  { name: "Steven" },
  { name: "Darius" },
  { name: "Rafael" },
  { name: "Abel" },
  { name: "Kane" },
  { name: "Damian" },
  { name: "Cairo" },
  { name: "Prescott" },
  { name: "Rooney" },
  { name: "Henry" },
  { name: "Jeremy" },
  { name: "Chancellor" },
  { name: "Dexter" },
  { name: "Callum" },
  { name: "Hilel" },
  { name: "Macon" },
  { name: "Alec" },
  { name: "Leo" },
  { name: "Stuart" },
  { name: "Beck" },
  { name: "Derek" },
  { name: "Ciaran" },
  { name: "Jasper" },
  { name: "Aaron" },
  { name: "Hector" },
  { name: "Jelani" },
  { name: "Leo" },
  { name: "Trevor" },
  { name: "Ciaran" },
  { name: "Grady" },
  { name: "Christopher" },
  { name: "Hakeem" },
  { name: "Jasper" },
  { name: "Reed" },
  { name: "Clarke" },
  { name: "Oleg" },
  { name: "Thane" },
  { name: "Ignatius" },
  { name: "Coby" },
  { name: "Micah" },
  { name: "Herrod" },
  { name: "Marvin" },
  { name: "Tyrone" },
  { name: "Ezekiel" },
  { name: "Fritz" },
  { name: "Blaze" },
  { name: "Clinton" },
  { name: "Thomas" },
  { name: "Brendan" },
  { name: "Axel" },
  { name: "Chancellor" },
  { name: "Dane" },
  { name: "Garrison" },
  { name: "Timon" },
  { name: "Ryder" },
  { name: "Odysseus" },
  { name: "Raja" },
  { name: "Jameson" },
  { name: "Addison" },
  { name: "Noble" },
  { name: "Maxwell" },
  { name: "Caleb" },
  { name: "Warren" },
  { name: "Colin" },
  { name: "Sean" },
  { name: "Zeus" },
  { name: "Drew" },
  { name: "Owen" },
  { name: "Noble" },
  { name: "Alec" },
  { name: "Nasim" },
  { name: "Abraham" },
  { name: "Judah" },
  { name: "Hedley" },
  { name: "Reed" },
  { name: "David" },
  { name: "Geoffrey" },
  { name: "Demetrius" },
  { name: "George" },
  { name: "Benedict" }
];

selectdata = selectdata.map(item => item.name);

const showSections = e => {
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
  console.log(width, height);
  electronRenderer.send("form-resize", { width, height });
};

const ConditionalWrapper = (data, item, props, values) =>
  // console.log(data, item);
  Array.isArray(data[item]) ? (
    <React.Fragment>
      {data[item].map((nested_item, nested_index) => (
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
          data={
            nested_item.readOnly
              ? nested_item.data
              : nested_item.autoprop
              ? getIn(props, nested_item.autoprop)
              : null
          }
          autofillProp={nested_item.autofillProp}
          readOnly={nested_item.readOnly ? nested_item.readOnly : false}
          setFieldsValue={props.setFieldValue}
        />
      ))}
    </React.Fragment>
  ) : item == "Notes" ? (
    <data.Notes.component
      name={item}
      value={values[item]}
      {...props}
      render={data[item].render}
    />
  ) : null;

const GeneralForm = props => {
  let data = props.formheader[props.formName];
  let keys = Object.keys(data); // keys reference to check if  address exists
  let header_keys = keys.filter(item => (item != "Address" ? item : null)); // different key for not including "Address"
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
    </div>
  );
};

export default GeneralForm;
