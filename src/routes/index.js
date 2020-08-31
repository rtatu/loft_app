import { Route, HashRouter as Router, Switch } from "react-router-dom";
import React from "react";
import Home from "../screens/home";
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
import OrderEntryScreen from "../screens/OrderEntryScreen";
import DataMaintenanceScreen from "../screens/DataMaintenanceScreen";
import ManageContactScreen from "../screens/ManageContactScreen";
import UserManagementScreen from "../screens/UserManagementScreen";
import {SafetyScreen,SafetyFormScreen} from "../screens/SafetyScreen"
import DataTableViewScreen from "../screens/DataTableViewScreen";

const Root = () => (
  <Router>
    <Route path="/login" exact component={Login} />
    <AuthenticatedRoute path="/" exact component={Home} />
    <AuthenticatedRoute
      exact
      path="/database-maintenance/:navigate/:tableName?"
      component={DataMaintenanceScreen}
    />
    <AuthenticatedRoute
      exact
      path="/database-maintenance/:navigate/:tableName/:id"
      component={DataTableViewScreen}
    />
    <AuthenticatedRoute path="/empty" component={Empty} />
    <AuthenticatedRoute
      path="/form/:navigate/:tableName?/:id?/:nestedId?"
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
    <AuthenticatedRoute path="/safety-and-compliance" exact component={SafetyScreen} />
    <AuthenticatedRoute path="/safety-group/:id?" exact component={SafetyFormScreen} />
    <AuthenticatedRoute
      path="/order-entry"
      exact
      component={OrderEntryScreen}
    />

    <AuthenticatedRoute
      path="/manage-contact/:customerId"
      exact
      component={ManageContactScreen}
    />
    <AuthenticatedRoute
      path="/setting"
      exact
      component={UserManagementScreen}
    />
  </Router>
);

export default Root;
