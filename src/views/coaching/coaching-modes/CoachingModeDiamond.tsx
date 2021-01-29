import React from "react";

import { joustDiamond, conquestDiamond, duelDiamond } from "../../../shared/images/SharedIcons";

import { CoachingSelectMode } from "../CoachingModel";

const CoachingModeDiamond = (props: CoachingSelectMode) => {
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
      className:"select-coaching-rank-down-gamemode-diamond",
      onClick: chooseJoust,
      src: joustDiamond,
      modeOfCoaching: "Joust coaching",
      text: "Get lessons from highly-ranked diamond player in Joust. Get analysis of your plays, real-time lessons and communication via Discord."
    },
    {
      id: 2,
      className:"select-coaching-rank-gamemode-diamond",
      onClick: chooseConquest,
      src: conquestDiamond,
      modeOfCoaching: "Conquest coaching",
      text: "Get lessons from highly-ranked diamond player in Conquest. Get analysis of your plays, real-time lessons and communication via Discord."
    },
    {
      id: 3,
      className: "select-coaching-rank-down-gamemode-diamond",
      onClick: chooseDuel,
      src: duelDiamond,
      modeOfCoaching: "Duel coaching",
      text: "Get lessons from highly-ranked diamond player in Duel. Get analysis of your plays, real-time lessons and communication via Discord. Possible 1v1 scrims."
    }
  ];

  const cardsMapped = cards.map((card) => (
    <div key={card.id} className={card.className} onClick={card.onClick}>
        <img src={card.src} alt="rank-icon" className="coaching-rank" />
        <div className="coaching-description">
            <div className="level-of-coaching">{card.modeOfCoaching}</div>
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
                    value="CJEKJADN6L8P2"
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
  ));

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

  export default CoachingModeDiamond;
