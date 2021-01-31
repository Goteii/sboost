import React from "react";
import { joustIconOn, duelIconOn } from "../../../shared/images/SharedIcons";
import { CoachingSelectMode } from "../CoachingModel";

const CoachingModeGrandmaster = (props: CoachingSelectMode) => {
  const { prevStep } = props;

  const chooseJoust = () => {
    props.chooseDivision("joust");
  };

  const chooseDuel = () => {
    props.chooseDivision("duel");
  };

  const cards = [
    {
      id: 1,
      onClick: chooseJoust,
      img: joustIconOn,
      idImg: "joust-icon",
      typeOfCoaching: "Joust coaching",
      text: "Receive top-tier coaching from one of Grandmasters-ranked joust players. Get analysis of your plays, builds and picks, picking and banning phase, decision-making, real-time lessons and communication via Discord. "      
    },
    {
      id: 2,
      onClick: chooseDuel,
      img: duelIconOn,
      idImg: "duel-icon",
      typeOfCoaching: "Duel coaching",
      text:`Learn from Grandmasters-ranked duel player. Get analysis of your plays, real-time lessons and communication via Discord. 
      Possible 1v1 scrims to make you understand better the mechanics, matchups and the mode!`
    }
  ];

  const cardsMapped = cards.map((card) => (
    <div key={card.id} className="select-coaching-rank-down-gamemode-gm grandmasters" onClick={card.onClick}>
        <img src={card.img} alt="rank-icon" className="coaching-rank" id={card.idImg} />
        <div className="level-of-coaching">{card.typeOfCoaching}</div>
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
                    value="DZ6JCLK7HXUJJ"
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
  ));

  return (
    <div className="coaching-container-rank">
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

  export default CoachingModeGrandmaster;
