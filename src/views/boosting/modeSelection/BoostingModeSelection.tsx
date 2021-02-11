import React from "react";

import { BoostingModeSelectionProps } from "../BoostingModel";

import { Link } from "react-router-dom";

import { joustIconOn, joustIconOff, conquestIconOn, conquestIconOff, duelIconOn, duelIconOff } from "../../../shared/images/SharedIcons";

import "../BoostingViewStyles.scss";

const BoostingModeSelection = (props: BoostingModeSelectionProps) => {
    const { valuesFormBoosting, handleChange, nextStep } = props;
    const modes = [
      {
        id: 1,
        name: "Joust",
        inputButton: (
          <input
            type="checkbox"
            className="choose-rank"
            name="selectMode"
            id="isJoust"
            value="1"
            onChange={handleChange}
          />
        ),
        imageHolder:
          +valuesFormBoosting.selectMode === 1 ? (
            <img src={joustIconOn} alt="joust_icon" className="select-boosting mode"/>
          ) : (
            <img src={joustIconOff} alt="joust_icon_off" className="select-boosting mode"/>
          ),
      },
      {
        id: 2,
        name: "Conquest",
        inputButton: (
          <input
            type="checkbox"
            className="choose-rank"
            id="isConquest"
            name="selectMode"
            value="2"
            onChange={handleChange}
          />
        ),
        imageHolder:
          +valuesFormBoosting.selectMode === 2 ? (
            <img src={conquestIconOn} alt="conquest_icon" className="select-boosting mode" />
          ) : (
            <img src={conquestIconOff} alt="conquest_icon_off" className="select-boosting mode" />
          ),
      },
      {
        id: 3,
        name: "Duel",
        inputButton: (
          <input
            type="checkbox"
            className="choose-rank"
            name="selectMode"
            id="isDuel"
            value="3"
            onChange={handleChange}
          />
        ),
        imageHolder:
          +valuesFormBoosting.selectMode === 3 ? (
            <img src={duelIconOn} alt="duel_icon" className="select-boosting mode"/>
          ) : (
            <img src={duelIconOff} alt="duel_icon_off" className="select-boosting mode"/>
          ),
      },
    ];

    const modeOptions = modes.map((mode) => (
      <div key={mode.id} className="boosting-rank">
        <span className="mode-text">{mode.name}</span>
        {mode.inputButton}
        {mode.imageHolder}
      </div>
    ));
    return (
      <div className="boosting-container">
        <span className="boosting-maintext">
          Choose mode you wish to get higher rank at:
        </span>
        <span className="error">{valuesFormBoosting.error}</span>
        <div className="boosting-ranks-container">{modeOptions}</div>
        <div className="navigation-buttons">
          <Link to="/">
            <div className="prev-button">HOME</div>
          </Link>
          <div className="next-button" onClick={nextStep}>
            NEXT
          </div>
        </div>
      </div>
    );
  }

export default BoostingModeSelection;
