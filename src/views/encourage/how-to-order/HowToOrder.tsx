import React from 'react'

import {orderSteps} from "./Utils";

import "./styles.scss";

const HowToOrder = () => {

    const orderStepsMapped = orderSteps.map((order) => (
        <li key={order.id} className="how-to-step">
            {order.text}
        </li>
    ))

    return (
        <div className="how-to-container">
            <ul className="how-to-list">
            <span className="how-to-text"><b>Smite-boost</b> - How to order?</span>
            {orderStepsMapped}
            </ul>
        </div>
    )
}

export default HowToOrder;
