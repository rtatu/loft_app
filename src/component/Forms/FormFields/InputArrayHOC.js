import React from "react";
const data = [
  {
    user: "Daniel Shiffman",
    message: `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
    attachment: null
  },
  {
    user: "Rohit Tatu",
    message: `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
    attachment: null
  },
  {
    user: "Rohit Tatu",
    message: null,
    attachment: {
      name: "project_guide.pdf",
      data: null
    }
  },
  {
    user: "Daniel Shiffman",
    message: `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
    attachment: null
  },
  {
    user: "Daniel Shiffman",
    message: `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
    attachment: null
  }
];

class InputArrayHOC extends React.Component {
  constructor(props) {
    console.log(props, "inputhoc")
    super(props);
    this.state = {
      data: this.props.value || data
    };
    this.lastChild = React.createRef()
  }

  componentDidMount(){
    this.lastChild.current.scrollIntoView(false)
    
  }

  push = obj => {
    let data = [...this.state.data];
    data.push(obj);
    this.setState({ data }, ()=>{
      this.lastChild.current.scrollTo(0,this.lastChild.current.scrollHeight)
    });
  };

  remove = ind => {
    let data = [...this.state.data];
    data.splice(ind, ind);
    this.setState({ data });
  };

  render() {
    return <this.props.render data={this.state.data} push={this.push} remove={this.remove} lastChild={this.lastChild}/>;
  }
}

export default InputArrayHOC;
