import React from "react";

import { joustMasters, conquestMasters, duelMasters } from "../../../shared/images/SharedIcons";

import { CoachingSelectMode } from "../CoachingModel";


const CoachingModeMasters = (props: CoachingSelectMode) => {
   const { prevStep } = props;
 
  const chooseConquest = () => {
    props.chooseDivision("conquest");
  };

 const chooseDuel = () => {
    props.chooseDivision("duel");
  };

const chooseJoust = () => {
    props.chooseDivision("joust");
  };

  const cards = [
    {
      id: 1,
      className: "select-coaching-rank-down-gamemode masters",
      onClick: chooseJoust,
      img: joustMasters,
      modeCoaching: "Joust coaching",
      text: "Receive top-tier coaching from a Master-ranked player. Get analysis of your plays, real-time lessons and communication via Discord."
    },
    {
      id: 2,
      className: "select-coaching-rank-gamemode masters",
      onClick: chooseConquest,
      img: conquestMasters,
      modeCoaching: "Conquest coaching",
      text: "Get lessons and some tips straightly from Masters-ranked player. Get analysis of your plays, real-time lessons and communication via Discord."
    },
    {
      id: 3,
      className: "select-coaching-rank-down-gamemode masters",
      onClick: chooseDuel,
      img: duelMasters,
      modeCoaching: "Duel coaching",
      text: `Learn from Masters-ranked duel player. Get analysis of your plays, real-time lessons and communication via Discord. 
      Possible 1v1 scrims to make you understand better the mechanics, matchups and the mode!`
    }
  ];

  const cardsMapped = cards.map((card) => (
    <div key={card.id} className={card.className} onClick={card.onClick}>
        <img src={card.img} alt="rank-icon" className="coaching-rank" />
        <div className="coaching-description">
            <div className="level-of-coaching">{card.modeCoaching}</div>
            <div className="coaching-text">
              <span className="coaching-text-span">
                {card.text}
              </span>
            </div>
        <div className="coaching-price">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="paypal-form"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="UTA32BBDQ6RLS"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
                className="paypal-button"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          </div>
    </div>
  ))
    
  return (
    <div className="coaching-container-rank-3">
      <span className="coaching-maintext">Select Gamemode </span>
      <div className="rank-coaching-container">
        {cardsMapped}
      </div>
      <div className="navigation-buttons-coaching">
        <div className="prev-button" onClick={prevStep}>
          BACK
        </div>
      </div>
    </div>
    );
}

  export default CoachingModeMasters;
