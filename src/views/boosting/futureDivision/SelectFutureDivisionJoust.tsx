import React from "react";

import { SelectionProps } from "../BoostingModel";
import {divisions,tiers} from "./futureDivisionUtils";

import "../BoostingViewStyles.scss";

const SelectFutureDivisionJoust = (props:SelectionProps) => {
    const {
      valuesFormBoosting,
      handleChange,
      nextStep,
      previousStep,
    } = props;

    const divisionChoose = divisions.map((division) => (
      <div key={division.id} className="division">
        <span className="rank-text">{division.name}</span>
        <input
          type="checkbox"
          className="choose_division"
          name="futureDivision"
          id="futureDivision"
          value={division.value}
          onChange={handleChange}
        />
        <img
          src={
            +valuesFormBoosting.futureDivision === division.value
              ? division.imageOn
              : division.imageOff
          }
          alt={division.name + "icon"}
        />
      </div>
    ));

    const tierChoose = tiers.map((tier) => (
      <div key={tier.id} className="tier-holder">
        <input
          type="checkbox"
          className="tier-input"
          name="futureTier"
          id="futureTier"
          value={tier.value}
          onChange={handleChange}
        />
        {+valuesFormBoosting.futureTier === tier.value ? (
          <span className="tier" style={{ color: "gold" }}>
            {tier.sign}
          </span>
        ) : (
          <span className="tier">{tier.sign}</span>
        )}
      </div>
    ));

    return (
      <div className="boosting-container">
        <span className="boosting-maintext">
          Choose division and tier you wish to achieve:
        </span>
        <div className="current-division">{divisionChoose}</div>
        <div className="tier-container">{tierChoose}</div>
        <div className="navigation-buttons">
          <div className="prev-button" onClick={previousStep}>
            BACK
          </div>
          <div className="next-button" onClick={nextStep}>
            NEXT
          </div>
        </div>
      </div>
    );
  }

export default SelectFutureDivisionJoust;
