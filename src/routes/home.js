import React from 'react';
import {Route} from 'react-router-dom';
import App from '../component/App';
import Datatable from '../component/Datatable';
// import Loading from '../static/truck_loading.gif';

const Home = () => 
    <Route 
        path="/" 
        component={TestRoute}
    />

// Test Route

const TestRoute = () => 
        <div style={{display : 'flex', height : '100%'}}>
            <App />
            <Datatable />
        </div>


export default Home