import React  from "react";

import { SelectionProps } from "../BoostingModel";
import {divisionsDuel, tiers} from "./currentDivisionUtils";

import "../BoostingViewStyles.scss";

const SelectCurrentDivisionDuel = (props: SelectionProps) => {
    const {
      valuesFormBoosting,
      handleChange,
      nextStep,
      previousStep,
    } = props;

    const divisionChoose = divisionsDuel.map((division) => (
      <div key={division.id} className="division">
        <span className="rank-text">{division.name}</span>
        <input
          type="checkbox"
          className="choose-division"
          name="currentDivision"
          id="currentDivision"
          value={division.value}
          onChange={handleChange}
        />
        <img
          src={
            +valuesFormBoosting.currentDivision === division.value
              ? division.imageOn
              : division.imageOff
          }
          alt={division.name + "icon"} className="select-boosting"
        />
      </div>
    ));

    const tierChoose = tiers.map((tier) => (
      <div key={tier.id} className="tier-holder">
        <input
          type="checkbox"
          className="tier-input"
          name="currentTier"
          id="currentTier"
          value={tier.value}
          onChange={handleChange}
        />
        {+valuesFormBoosting.currentTier === tier.value ? (
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
          Choose your current division and tier:
        </span>
        {valuesFormBoosting.error}
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

export default SelectCurrentDivisionDuel;
