import React from "react";

import { Link, withRouter, Route } from "react-router-dom";

import AccDetails from "./details/AccountDetails";
import Contact from "./contact/Contact";
import Opinion from "./opinion/Opinion";
import Order from "./user-orders/UserOrders";

import { getSessionStorageToken } from "../../shared/helpers/storageHelpers";

import {dashboardUI} from "./Utils";

import "./DashboardStyles.scss";

class DashboardView extends React.Component<any> {
  state = {
    username: this.props.location.state.username,
    userEmail: this.props.location.state.email,
    userID: this.props.location.state.userId,
  };

  componentDidMount() {
    const jwt = getSessionStorageToken();
    if (!jwt) {
      this.props.history.push("/");
    }
  }

  logout = () => {
    sessionStorage.removeItem("cool-jwt");
    this.props.history.push("/");
  };

  dashboardUIMapped = dashboardUI.map((category) => ( 
        <div className="button-container" key={category.id}>
            <div className="button-text-div">
              <Link to={category.link} target={category.target} className="button-link">
                <span className="button-text">{category.text}</span>
              </Link>
            </div>
          </div>
  ))

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-left-panel">
          <div className="username-holder">
          You are logged in as<br/>  <span className="username">
            <b>{this.state.username}</b></span>
          </div>
          
          {this.dashboardUIMapped}

          <div className="logout-button-container">
            <button className="button-logout" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="dashboard-display-panel">
          <Route path="/dashboard/details">
            <AccDetails
              username={this.state.username}
              userEmail={this.state.userEmail}
              id={this.state.userID}
            />
          </Route>
          <Route path="/dashboard/contact">
            <Contact />
          </Route>
          <Route path="/dashboard/opinion">
            <Opinion />
          </Route>
          <Route path="/dashboard/order">
            <Order />
          </Route>

          {this.props.location.pathname === "/dashboard/details" ||
            this.props.location.pathname === "/dashboard/contact" ||
            this.props.location.pathname === "/dashboard/opinion" ||
            this.props.location.pathname === "/dashboard/order" || (
              <AccDetails
                username={this.state.username}
                userEmail={this.state.userEmail}
                id={this.state.userID}
              />
            )}
        </div>
      </div>
    );
  }
}

export default withRouter(DashboardView);
