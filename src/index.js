import React from 'react';
import ReactDOM from 'react-dom';
import GeneralForm from './component/form.js';


class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <GeneralForm />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));