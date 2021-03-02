import React from "react";

import { SelectionPropsCalculation } from "../BoostingModel";

import { calculate, divisionToString, modeToString, tierToString, typeToString } from "../Utils";

import "../BoostingViewStyles.scss";

const ConfirmModal = (props: SelectionPropsCalculation) => {
    const {
      valuesFormBoosting,
      previousStep,
      costCurrent,
      costFuture,
      modeCost,
      service,
      sendOrderToDb,
    } = props;
    
    return (
      <div className="boosting-container-shadow">
        <div className="boosting-modal-container">
          <div className="modal-upper-check">
            <b>Check if given information matches with reality: </b>
          </div>
          <div className="values-container">
            <span className="values-modal">
              Mode:
              <span className="inserted-values">
                {modeToString(+valuesFormBoosting.selectMode)}
              </span>
            </span>
            <span className="values-modal">
              Current division:
              <span className="inserted-values">
                {divisionToString(+valuesFormBoosting.currentDivision)}
              </span>
            </span>
            <span className="values-modal">
              Current tier:
              <span className="inserted-values">
                {tierToString(+valuesFormBoosting.currentTier)}
              </span>
            </span>
            <span className="values-modal">
              Future division:
              <span className="inserted-values">
                {divisionToString(+valuesFormBoosting.futureDivision)}
              </span>
            </span>
            <span className="values-modal">
              Future tier:
              <span className="inserted-values">
                {tierToString(+valuesFormBoosting.futureTier)}
              </span>
            </span>
            <span className="values-modal">
              Type of boosting:
              <span className="inserted-values">
                {typeToString(+valuesFormBoosting.typeOfService)}
              </span>
            </span>
            <span className="values-modal">
              Price:
              <span className="inserted-values">
                {calculate(costCurrent, costFuture, modeCost, service)} €
              </span>
            </span>
          </div>
        </div>
        <div className="modal-buttons-container">
          <div className="navigation-buttons-modal">
            <div className="prev-button-modal" onClick={previousStep}>
              <span className="text">BACK </span>
            </div>
            <div className="next-button-modal">
            <button onClick={sendOrderToDb}>Click me</button>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              style={{ backgroundColor: "#393886" }}
              onSubmit={sendOrderToDb}
            >
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="L94D2E7BUX9MY" />
              <input type="hidden" name="lc" value="GB" />
              <input type="hidden" name="item_name" value="Boosting_button2" />
              <input
                type="hidden"
                name="amount"
                value={calculate(costCurrent, costFuture, modeCost, service)}
                onClick={sendOrderToDb}
              />
              <input type="hidden" name="button_subtype" value="services" />
              <input type="hidden" name="no_note" value="0" />
              <input
                type="hidden"
                name="cn"
                value="Facebook/Twitter: smite-boost"
              />
              <input type="hidden" name="no_shipping" value="2" />
              <input type="hidden" name="currency_code" value="EUR" />
              <input
                type="hidden"
                name="bn"
                value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
                style={{ backgroundColor: "#393886" }}
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
    );
  }

export default ConfirmModal;
