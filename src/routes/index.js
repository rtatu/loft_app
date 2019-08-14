import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import Home from './home'

const Root = () => 
    <Router>
        <Home />
    </Router>

export default Root