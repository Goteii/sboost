import React from "react";

import Orders from "./orders/Orders";

import { RouteProps } from "../../shared/utils/route/models";

import "./AdminDashboardStyles.scss";

const AdminDashboardView = (props: RouteProps) => {

 const logout = () => {
    sessionStorage.removeItem("cool-jwt");
    props.history.push("/");
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-left-panel">
        <div className="admin-username-holder">
          <span className="admin-username">Goteii</span>
        </div>
        <div className="admin-logout-button-container">
          <button className="logout-button" onClick={logout}>Logout</button> 
          </div>
      </div>

      <div className="admin-dashboard-display-panel">
        <Orders />
      </div>
    </div>
  );
};

export default AdminDashboardView;
