import React from 'react'
import SafetyTable from './SafetyTable'

class SafetyForm extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let id = this.props.match.params.id
    let name = id && id!="truck" && this.props.groups[id]['name']
    if(!id){
      electronRemote.getCurrentWindow().setTitle(`Add New Safety Group`)
      return
    }else if(id == 'truck'){
      electronRemote.getCurrentWindow().setTitle(`Add New Safety Group`)
      return
    }
    electronRemote.getCurrentWindow().setTitle(`Edit Safety Group ${name}`)
  }

  render(){
    return(
      <SafetyTable {...this.props} />
    )
  }
}

export default SafetyForm