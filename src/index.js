import React from 'react';
import ReactDOM from 'react-dom';
import DatatableJSX from './component/data_table'

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <DatatableJSX />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));