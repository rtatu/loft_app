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
import PO from "../screens/po";
import FormBuilderScreen from "../screens/FormBuilder";

const Root = () => (
  <Router>
    <Route path="/login" exact component={Login} />
    <AuthenticatedRoute path="/" exact component={Home} />
    <AuthenticatedRoute
      path="/database-maintenance/:navigate/:tableName?"
      component={DataMaintenance}
    />
    <AuthenticatedRoute path="/empty" component={Empty} />
    <AuthenticatedRoute
      path="/form/:navigate/:tableName/:id?"
      component={FormContainer}
    />
    <AuthenticatedRoute path="/planner" component={Planner} />
    <AuthenticatedRoute path="/order" exact component={Order} />
    <AuthenticatedRoute path="/tableform" exact component={TableForm} />
    <AuthenticatedRoute path="/fo" exact component={FuelOp} />
    <AuthenticatedRoute path="/maintenance" exact component={Maintenance} />
    <AuthenticatedRoute path="/po/:navigate?" exact component={PO} />
    <AuthenticatedRoute
      path="/formBuilder/:formId?"
      exact
      component={FormBuilderScreen}
    />
  </Router>
);

export default Root;
