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
    return (
      <div className="coaching-container-rank">
        <span className="coaching-maintext">Select Gamemode </span>
        <div className="rank-coaching-container">
          <div
            className="select-coaching-rank-down-gamemode-gm"
            onClick={chooseJoust}
          >
            <img src={joustIconOn} alt="rank-icon" className="coaching-rank" />
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
          </div>
          <div
            className="select-coaching-rank-down-gamemode-gm"
            onClick={chooseDuel}
          >
            <img src={duelIconOn} alt="rank-icon" className="coaching-rank" />
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

  export default CoachingModeGrandmaster;
