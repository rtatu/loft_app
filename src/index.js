import React from 'react';
import ReactDOM from 'react-dom';
import ArchiveProvider from './context/archiveContext';
import './static/global.sass';


import Root from './routes/';


const App = () => 
    <ArchiveProvider>
        <Root />
    </ArchiveProvider>


ReactDOM.render(<App />, document.getElementById('root'));