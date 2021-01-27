import React from "react";

import { Link, withRouter, Route } from "react-router-dom";

import AccDetails from "./details/AccountDetails";
import Contact from "./contact/Contact";
import Opinion from "./opinion/Opinion";
import Order from "./user-orders/UserOrders";

import { getSessionStorageToken } from "../../shared/helpers/storageHelpers";

import OrderImage from "./image/order.png";
import CoachImage from "./image/coach.png";
import BoostImage from "./image/boost.png";
import RateImage from "./image/rate.png";
import ContactImage from "./image/contact.png";

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

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-left-panel">
          <div className="username-holder">
            <span className="username">{this.state.username}</span>
          </div>
          <div className="account-details-container">
            <Link to="/dashboard" className="button-link">
              Account details
            </Link>
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

        <div className="dashboard-left-panel-button-space">
          <div className="logout-button-container">
            <button className="button-logout" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="dashboard-bottom-panel">
          <div className="button-container">
            <div className="button-image">
              <img src={OrderImage} alt="order" height="90px" />
            </div>
            <div className="button-text-div">
              <Link to="/dashboard/order" className="button-link">
                <span className="button-text">Your orders</span>
              </Link>
            </div>
          </div>
          <div className="button-container">
            <div className="button-image">
              <img src={CoachImage} alt="order" height="90px" />
            </div>
            <div className="button-text-div">
              <Link to="/coaching" target="_blank" className="button-link">
                <span className="button-text">Buy coaching</span>
              </Link>
            </div>
          </div>
          <div className="button-container">
            <div className="button-image">
              <img src={BoostImage} alt="order" height="90px" />
            </div>
            <div className="button-text-div">
              <Link to="/boosting" target="_blank" className="button-link">
                <span className="button-text">Buy boosting</span>
              </Link>
            </div>
          </div>
          <div className="button-container">
            <div className="button-image">
              <img src={ContactImage} alt="order" height="85px" />
            </div>
            <div className="button-text-div">
              <Link to="/dashboard/contact" className="button-link">
                <span className="button-text">Contact us</span>
              </Link>
            </div>
          </div>
          <div className="button-container">
            <div className="button-image">
              <img src={RateImage} alt="order" height="90px" />
            </div>
            <div className="button-text-div">
              <Link to="/dashboard/opinion" className="button-link">
                <span className="button-text">Rate us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DashboardView);
