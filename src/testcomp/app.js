import React from 'react';
import {ArchiveContext} from './../context/archiveContext'

class AppTest extends React.Component {

    render(){
        return (
            <ArchiveContext.Consumer>
                {
                    context => < Details {...context.datastore.list.vendor[0]} changeSomething={context.changeSomething}/>
                }
            </ArchiveContext.Consumer>
            // <Details />
        )
    }
}

const Details = (props) => 
    <div onClick={props.changeSomething}>
        <p>id : {props.id}</p>
        <p>name : {props.name}</p>
        <p>age : {props.age}</p>
    </div>

export default AppTest