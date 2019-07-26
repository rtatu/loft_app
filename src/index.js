import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
            <h1>Loft App at {process.env.NODE_ENV}</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));