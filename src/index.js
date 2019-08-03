import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './component/sidebar'

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Sidebar />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));