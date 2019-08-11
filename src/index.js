import React from 'react';
import ReactDOM from 'react-dom';
import ArchiveProvider from './context/archiveContext';
import AppTest from './testcomp/app'
import RealTest from './testcomp/realTest'




class App extends React.Component {
    state = {
        index : true
    }

    handleChange = () => {
        this.setState({index : !this.state.index})
    }
    render(){
        return(
            <React.Fragment>
                {
                    (this.state.index) ?
                    <ArchiveProvider yolo={{datastore : {
                        list : {
                            vendor : [
                                {
                                    id : 1,
                                    name : "Rohit Tatu",
                                    age : "12",
                                    email : "rohit.tatu896@gmail.com"
                                }
                            ]
                        }
                    }}}>
                        <AppTest />
                    </ArchiveProvider>
                    : <RealTest />
                }
                <button onClick={this.handleChange}>HaHA</button>
            </ React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));