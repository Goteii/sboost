import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPageView from "./views/mainpage/MainPageView";
import UserDashboard from "./views/dashboard/DashboardView";
import AdminDashboardView from "./views/admin-dashboard/AdminDashboardView";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/admindashboard" component={AdminDashboardView} />
        <Route path="/" component={MainPageView} />
      </Switch>
    </Router>
  );
};

export default App;
