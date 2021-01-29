import React from "react";

import { Link } from "react-router-dom";

import { CoachingViewProps } from "../CoachingModel";

import { conquestMasters, conquestIconOn, duelDiamond } from "../../../shared/images/SharedIcons";

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
  const ranks = [
    {
      id: 1,
      className: "select-coaching-rank-down-masters",
      onClick: getMaster,
      img: conquestMasters,
      levelOfCoaching: "Masters coaching",
      text: "Receive top-tier coaching from a Master-ranked player. Get analysis of your plays, real-time lessons and communication via Discord.",
      textAfterBreak: "Available for all ranked modes(Conquest, Joust, Duel).",
      price: "10 EURO/hour"
    }, 
    {
      id: 2,
      className: "select-coaching-rank-grandmasters",
      onClick: getGrandmaster,
      img: conquestIconOn,
      levelOfCoaching: "Grandmaster coaching",
      text:"Get lessons and some tips strightly from Grandmasters-ranked player. Get analysis of your plays, real-time lessons and communication via Discord.",
      textAfterBreak: "Available for Joust and Duel ranked mode only!",
      price: "12 EURO/hour"
    },
    {
      id: 3,
      className: "select-coaching-rank-down-diamond",
      onClick: getDiamond,
      img: duelDiamond,
      levelOfCoaching: "Diamond coaching",
      text:"Learn from highly-placed diamond-ranked player. Get analysis of your plays, real-time lessons and communication via Discord.",
      textAfterBreak:"Available for all ranked modes(Conquest, Joust, Duel).",
      price: "8 EURO/hour"
    }
  ]

  const ranksMapped = ranks.map((rank) => (
    <div key={rank.id} className={rank.className} onClick={rank.onClick}>
      <img src={rank.img} alt="rank-icon" className="coaching-rank" />
      <div className="coaching-description">
        <div className="level-of-coaching">{rank.levelOfCoaching}</div>
        <div className="coaching-text">
        <span className="coaching-text-span">
                {rank.text}
                <br />
                <br />
                {rank.textAfterBreak}
              </span>
        </div>
        <div className="coaching-price">{rank.price}</div>
      </div>
    </div> 
  ));

  return (
    <div className="coaching-container">
      <span className="coaching-maintext">Coaching</span>
      <div className="rank-coaching-container">
        {ranksMapped}
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