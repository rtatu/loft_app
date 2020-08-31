import React from 'react'
import SafetyTable from './SafetyTable'

class SafetyForm extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let id = this.props.match.params.id
    if(!id){
      electronRemote.getCurrentWindow().setTitle(`Add New Safety Group`)
      return
    }
    electronRemote.getCurrentWindow().setTitle(`Edit Safety Group ${id}`)
  }

  render(){
    return(
      <SafetyTable />
    )
  }
}

export default SafetyForm