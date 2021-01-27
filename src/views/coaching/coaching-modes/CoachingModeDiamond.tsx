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
    return (
      <div className="coaching-container-rank-3">
        <span className="coaching-maintext">Select Gamemode </span>
        <div className="rank-coaching-container">
          <div
            className="select-coaching-rank-down-gamemode-diamond"
            onClick={chooseJoust}
          >
            <img src={joustDiamond} alt="rank-icon" className="coaching-rank" />
            <div className="coaching-description">
              <div className="level-of-coaching">Joust coaching</div>
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
                  src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif"
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
          <div
            className="select-coaching-rank-gamemode-diamond"
            onClick={chooseConquest}
          >
            <img
              src={conquestDiamond}
              alt="rank-icon"
              className="coaching-rank"
            />
            <div className="coaching-description">
              <div className="level-of-coaching">Conquest coaching</div>
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
                    src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif"
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
          <div
            className="select-coaching-rank-down-gamemode-diamond"
            onClick={chooseDuel}
          >
            <img src={duelDiamond} alt="rank-icon" className="coaching-rank" />
            <div className="coaching-description">
              <div className="level-of-coaching">Duel coaching</div>
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
                  src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif"
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
        <div className="navigation-buttons-coaching">
          <div className="prev-button" onClick={prevStep}>
            BACK
          </div>
        </div>
      </div>
    );
  }

  export default CoachingModeDiamond;
