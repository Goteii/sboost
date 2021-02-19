import React from "react";

import { SelectionProps } from "../BoostingModel";
import {typeOfService} from "./typeOfServiceUtils";

import "../BoostingViewStyles.scss";

const TypeOfService = (props: SelectionProps) => {
    const {
      valuesFormBoosting,
      handleChange,
      nextStep,
      previousStep,
    } = props;

    const chooseTypeOfService = typeOfService.map((service) => (
      <div key={service.id} className="type-of-service">
        <span className="type-of-service-text">{service.name}</span>
        <input
          type="checkbox"
          className="choose-service"
          name="typeOfService"
          value={service.value}
          onChange={handleChange}
        />
        <img
          src={
            +valuesFormBoosting.typeOfService === service.value
              ? service.imgOn
              : service.imgOff
          }
          alt={service.name + "icon"} className="select-boosting"
        />
        <span className="service-description">{service.description}</span>
      </div>
    ));

    return (
      <div className="boosting-container">
        <span className="boosting-maintext">Choose type of service:</span>
        <span className="error">{valuesFormBoosting.error}</span>
        <div className="boosting-ranks-service">{chooseTypeOfService}</div>
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

export default TypeOfService;
