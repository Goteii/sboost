import React from "react";

import { SelectionProps } from "../BoostingModel";
import {extrasOptions} from "./extrasUtils";

const Extras = (props: SelectionProps) => {
    const {
      valuesFormBoosting,
      handleChange,
      nextStep,
      previousStep,
    } = props;

    const chooseExtras = extrasOptions.map((extras) => (
      <div key={extras.id} className="boosting-extra">
        <span className="rank-text">{extras.name}</span>
        <div className="boosting-extra-option">
          {+valuesFormBoosting.extras === extras.value ? (
            <div className="choose-extra-active">
              <input
                className="extras-input"
                type="checkbox"
                name="extras"
                value={extras.value}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="choose-extra">
              <input
                className="extras-input"
                type="checkbox"
                name="extras"
                value={extras.value}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <span className="extra-description">{extras.description}</span>
      </div>
    ));

    return (
      <div className="boosting-container-extras">
        <span className="boosting-maintext">Choose extras(optional):</span>
        <div className="boosting-ranks-extras">{chooseExtras}</div>
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

export default Extras;
