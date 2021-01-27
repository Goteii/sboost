import React from "react";

import { Link } from "react-router-dom";

import { exampleOrder } from "./userOrdersUtils";

import "./UserOrdersStyles.scss";

const userOrder = exampleOrder.map((order) => (
  <div className="user-order">
    <div className="order-id-txt">
      <span className="category"> ID of order </span>
      <div className="order-id">
        <span className="value">{order.id}</span>
      </div>
    </div>

    <div className="order-type-txt">
      <span className="category"> Type of service </span>
      <div className="order-type">
        <span className="value">{order.typeOfOrder.toUpperCase()}</span>
      </div>
    </div>

    <div className="order-currentstate-txt">
      <span className="category"> Current state of service</span>
      <div className="order-current-state">
        <span className="value">{order.currentState.toUpperCase()}</span>
      </div>
    </div>

    <div className="feedback-txt">
      <span className="category"> Give us a feedback! </span>
      <div className="feedback">
        <div className="feedback-button">
          <Link to="/dashboard/opinion" className="button-link">
            <span> Rate us!</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const UserOrders = () => {
  return (
    <div className="order-container">
      <div className="order-text">Your orders:</div>
      {userOrder}
    </div>
  );
};

export default UserOrders;
