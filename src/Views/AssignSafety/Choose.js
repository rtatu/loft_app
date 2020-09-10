import React from "react";
import addsafety from "../../static/icon/safety/addsafety.svg";
import assignsafety from "../../static/icon/safety/assignsafety.svg";
import "./assign.scss";

const types = [
  {
    name: "Add custom safety items",
    text: "Create custom groups by choosing safety items",
    image: addsafety,
    action: "add",
  },
  {
    name: "Assign Safety Groups",
    text: "Assign Safety Groups from Safety & Compliance",
    image: assignsafety,
    action: "assign",
  },
];

class Choose extends React.Component {
  state = {
    selected: ''
  }

  setSelect = (selected) => {
    this.setState({selected})
  }
  render() {
    let {selected} = this.state
    return (
      <div className="choose-container">
      <div className="choose-block">
        {types.map((item, index) => (
          <div
            className="choose-block-child"
            key={index}
            onClick={() => this.setSelect(item.action)}
            style={selected== item.action ? { border: "1px solid #507DF0" } : null}
          >
            <img src={item.image} />
            <span>{item.name}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <button className="assigncontinue" onClick={()=>this.props.onContinue(selected)}>
        Continue
      </button>
    </div>
    )
  }
}

// const Choose = (props) => {
//   const [selected,setSelect] = React.useState('add')
//   return (
//     <div className="choose-container">
//       <div className="choose-block">
//         {types.map((item, index) => (
//           <div
//             className="choose-block-child"
//             key={index}
//             onClick={() => setSelect(item.action)}
//             style={selected== item.action ? { border: "1px solid #507DF0" } : null}
//           >
//             <img src={item.image} />
//             <span>{item.name}</span>
//             <span>{item.text}</span>
//           </div>
//         ))}
//       </div>
//       <button className="assigncontinue" onClick={()=>props.onContinue(selected)}>
//         Continue
//       </button>
//     </div>
//   );
// };

export default Choose;
