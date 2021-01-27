import React from "react";

import { Link } from "react-router-dom";

import { CoachingViewProps } from "../CoachingModel";

import { joustMasters, conquestIconOn, duelDiamond } from "../../../shared/images/SharedIcons";

import "./CoachingViewStyles.scss";

const CoachingView = (props:CoachingViewProps) => {
  const { nextStep } = props;
  
  const getMaster = () => {
    props.getRank("master", 10);
  };

  const getGrandmaster = () => {
    props.getRank("grandmaster", 12);
  };

  const getDiamond = () => {
    props.getRank("diamond", 8);
  };
    return (
      <div className="coaching-container">
        <span className="coaching-maintext">Coaching</span>
        <div className="rank-coaching-container">
          <div
            className="select-coaching-rank-down-masters"
            onClick={getMaster}
          >
            <img src={joustMasters} alt="rank-icon" className="coaching-rank" />
            <div className="coaching-description">
              <div className="level-of-coaching">Masters coaching</div>
              <div className="coaching-text">
                <span className="coaching-text-span">
                  Receive top-tier coaching from a Master-ranked player. Get
                  analysis of your plays, real-time lessons and communication
                  via Discord.
                  <br />
                  <br />
                  Available for all ranked modes(Conquest, Joust, Duel).
                </span>
              </div>
              <div className="coaching-price">10 EURO</div>
            </div>
          </div>
          <div
            className="select-coaching-rank-grandmasters"
            onClick={getGrandmaster}
          >
            <img
              src={conquestIconOn}
              alt="rank-icon"
              className="coaching-rank"
            />
            <div className="coaching-description">
              <div className="level-of-coaching">Grandmasters coaching</div>
              <div className="coaching-text">
                <span className="coaching-text-span">
                  Get lessons and some tips strightly from Grandmasters-ranked
                  player. Get analysis of your plays, real-time lessons and
                  communication via Discord.
                  <br />
                  <br />
                  Available for Joust and Duel ranked mode only!
                </span>
              </div>
              <div className="coaching-price">12 EURO</div>
            </div>
          </div>
          <div
            className="select-coaching-rank-down-diamond"
            onClick={getDiamond}
          >
            <img src={duelDiamond} alt="rank-icon" className="coaching-rank" />
            <div className="coaching-description">
              <div className="level-of-coaching">Diamond coaching</div>
              <div className="coaching-text">
                <span className="coaching-text-span">
                  Learn from highly-placed diamond-ranked player. Get analysis
                  of your plays, real-time lessons and communication via
                  Discord. Possible 1v1 scrims.
                  <br />
                  <br />
                  Available for all ranked modes(Conquest, Joust, Duel).
                </span>
              </div>
              <div className="coaching-price">8 EURO</div>
            </div>
          </div>
        </div>
        <div className="navigation-buttons-coaching">
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

export default CoachingView;