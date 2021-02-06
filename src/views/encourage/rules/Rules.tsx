import React from 'react'

import {rules} from "./Utils";

import './styles.scss';

const Rules = () => {

    const rulesMapped = rules.map((rule) => (
        <li key={rule.id} className="rule">
            {rule.text}
        </li>
    ))
    return (
        <div className="rules-container">
        <span className="rules-maintext">Rules</span>
        <ul className="rules">
            {rulesMapped}
        </ul>
        </div>
    )
}

export default Rules;
