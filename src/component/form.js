import React from 'react';
import './styles/form.sass'
import Select from './FormFields/Select';
import Text from './FormFields/Text';
import Textarea from './FormFields/TextArea';
import Date from './FormFields/Date';

const data = {
    "General" : [
        {
            "label" : "Customer Code",
            "name" : "customerCode",
            "type" : "autocomplete"
        },
        {
            "label" : "Customer Name",
            "name" : "customerName",
            "type" : "autocomplete"
        },
        {
            "label" : "Address Line 1",
            "name" : "addressLine1",
            "type" : "text"
        },
        {
            "label" : "Address Line 2",
            "name" : "addressLine2",
            "type" : "text"
        },
        {
            "label" : "Country",
            "name" : "country",
            "type" : "select",
            "values" : ["USA", "CANADA"],
            "defaultValue" : "USA"
        },
        {
            "label" : "State",
            "name" : "state_province",
            "type" : "autocomplete"
        },
        {
            "label" : "City",
            "name" : "city",
            "type" : "text"
        },
        {
            "label" : "Postal Code",
            "name" : "postal_zip",
            "type" : "text"
        },
        {
            "label" : "Cell",
            "name" : "cell",
            "type" : "text"
        },
        {
            "label" : "Phone",
            "name" : "phone",
            "type" : "text"
        },
        {
            "label" : "Email",
            "name" : "email",
            "type" : "text"
        },
        {
            "label" : "Status",
            "name" : "status",
            "type" : "select",
            "values" : ["ACTIVE", "INACTIVE"],
            "defaultValue" : "ACTIVE"
        },
    ],
    "Bill To" : [
        {
            "label" : "Billing Location",
            "name" : "billingLocation",
            "type" : "autocomplete"
        },
        {
            "label" : "Terms",
            "name" : "terms",
            "type" : "autocomplete"
        },
        {
            "label" : "Address",
            "name" : "address",
            "type" : "text"
        },
        {
            "label" : "Status",
            "name" : "status",
            "type" : "select",
            "values" : ["ACTIVE", "INACTIVE"],
            "defaultValue" : "ACTIVE"
        },
        {
            "label" : "Standard to Print Notes",
            "name" : "standard_print_notes",
            "type" : "textarea"
        },
        {
            "label" : "Standard Invoice Instruction",
            "name" : "standard_invoice_instruction",
            "type" : "textarea"
        },
        {
            "label" : "Postal Code",
            "name" : "postal_zip",
            "type" : "text"
        },
        {
            "label" : "QuickPay Discount Type 1",
            "name" : "discount_one",
            "type" : "text"
        },
        {
            "label" : "If Paid in",
            "name" : "discount_one_unit",
            "type" : "text"
        },
        {
            "label" : "QuickPay Discount Type 2",
            "name" : "discount_two",
            "type" : "text"
        },
        {
            "label" : "If Paid in",
            "name" : "discount_two_unit",
            "type" : "text"
        },
        {
            "label" : "QuickPay Discount Type 3",
            "name" : "discount_two",
            "type" : "text"
        },
        {
            "label" : "If Paid in",
            "name" : "discount_three_unit",
            "type" : "text"
        },
    ],
    "Contacts" : [],
    "Notification" : [],
    "Notes" : []
}

let keys = Object.keys(data)
/**
 * @params {replace data with props}
 */
const GeneralForm = () =>
    <div className="form">
        <form className="genform">
            <div className="form-header">
                {
                    keys.map((item, index) =>
                        <div key={index} className={(index == 0) ? " form-nav header-active" : "form-nav"}>
                            {item}
                        </div>
                    )
                }
            </div>
            {
                keys.map((item, index) =>
                    <div key={index} className={(index == 0) ? "form-section" : "form-section hide"}>
                        {
                            data[item].map( (nested_item, nested_index) =>
                                (nested_index != 0) ?
                                    <div key={nested_index} className="field">
                                        <label>
                                            {nested_item.label}
                                        </label>
                                        <input type={nested_item.type} />
                                    </div>
                                :
                                <Select key={nested_index} label={nested_item.label}/>
                                // <Text key={nested_index} label={nested_item.label}/>
                                // <Date label={nested_item.label} key={nested_index}/>

                        )}
                    </div>
                )
            }

            <div className="form-action">
                <button className="discard">Discard Changes</button>
                <button className="save">Save</button>
            </div>
        </form>
    </div>

export default GeneralForm