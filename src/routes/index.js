import { Route, HashRouter as Router, Switch } from "react-router-dom";
import React from "react";
import Home from "../screens/home";
import DataMaintenance from "../screens/data_maintenance";
import Empty from "../component/Empty";
import FormContainer from "../screens/form";
import Planner from "../screens/planner";
import Order from "../screens/Order";
import TableForm from "../screens/tableform";
import FuelOp from "../screens/fuelop";
import Maintenance from "../screens/maintenance";
import Login from "../component/Login/";
import AuthenticatedRoute from "./AuthenticatedRoute";

const Root = () => (
  <Router>
    <Route path="/login" exact component={Login} />
    <AuthenticatedRoute path="/" exact component={Home} />
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
    <Route path="/fo" exact component={FuelOp} />
    <Route path="/maintenance" exact component={Maintenance} />
  </Router>
);

export default Root;
