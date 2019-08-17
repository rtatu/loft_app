import React from 'react';
import {Route} from 'react-router-dom';
import App from '../component/App';
import Datatable from '../component/Datatable';
// import Loading from '../static/truck_loading.gif';

// Test Route

const Home = () => 
        <div style={{display : 'flex', height : '100%'}}>
            <App />
            {/* <Datatable /> */}
        </div>


export default Home