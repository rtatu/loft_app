import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './component/notes.js';


class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Notes />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));