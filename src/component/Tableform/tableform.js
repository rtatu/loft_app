import React from "react";
import "./tableform.sass";
import add from '../../static/add.svg'

const ed = [
  {
    "charge code": "123",
    "description": "",
    quantity: "",
    price: "",
    amount: "",
    "tax code": "",
    "fuel surcharge": ""
  },
  {
    "charge code": "",
    description: "",
    quantity: "",
    price: "",
    amount: "",
    "tax code": "",
    "fuel surcharge": ""
  }
];

let pushdata = {
  "charge code": "",
  description: "",
  quantity: "",
  price: "",
  amount: "",
  "tax code": "",
  "fuel surcharge": ""
}

const flexData = [2,6,1,1,1,1,2]


const handleChange = e => {
  console.log(e.target.value);
};

const TableFormJSX = ({editData, addRow}) => (
  <div className="table-form-container">
    <div className="table-form">
      {/* table form head */}
      <ul className="table-form-row">
        {Object.keys(editData[0]).map((item, index) => (
          <li key={index} style={{flex:flexData[index]}}>
            <span>{item.toLocaleUpperCase()}</span>
            </li>
        ))}
      </ul>

      {/* input  data */}
      {editData.map((data, ind) => (
        <ul className="table-form-row" key={ind}>
          {Object.keys(editData[0]).map((item, index) => (
            <li key={index} style={{flex:flexData[index]}}>
              <input type="text" />
            </li>
          ))}
        </ul>
      ))}

      {/* add new line row */}
      <ul className="table-form-row">
        {Object.keys(editData[0]).map((item, index) => (
          <li key={index} style={{flex:flexData[index]}}>
            {
              (index == 0) ? <img src={add} onClick={addRow}/> : null
            }
          </li>
        ))}
      </ul>
    </div>
  </div>
);

class TableForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data : ed
    }
  }

  addRow = () => {
    let data = [...this.state.data]
    data.push(pushdata)
    // editData.push(pushdata)
    this.setState({data})
  }

  render() {
    return <TableFormJSX editData={this.state.data} addRow={this.addRow}/>;
  }
}

export default TableForm;
