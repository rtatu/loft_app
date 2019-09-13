import { Route, HashRouter as Router, Switch } from "react-router-dom";
import React from "react";
import Home from "./home";
import DataMaintenance from "./data_maintenance";
import Empty from "../component/Empty";
import FormContainer from "./form";
import Planner from "./planner";
import Order from "./Order";
import TableForm from "./tableform";

const Root = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route
      path="/database-maintenance/:navigate/"
      exact
      component={DataMaintenance}
    />
    <Route
      path="/database-maintenance/:navigate/:tableName"
      component={DataMaintenance}
    />
    <Route path="/empty" component={Empty} />
    <Route path="/form/:name" component={FormContainer} />
    <Route path="/planner" component={Planner} />
    <Route path="/order" exact component={Order} />
    <Route path="/tableform" exact component={TableForm} />
  </Router>
);

export default Root;
