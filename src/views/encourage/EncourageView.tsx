import React from "react";


import Photoslider from "./photo-slider/Photoslider";
import Buttons from "./buttons/ButtonsEncourage";

import { badgeIcon } from "../viewsImages/ViewsImages";
import {badges} from "./encourageUtils";

import "./EncourageViewStyles.scss";


const badgeMapped = badges.map((badge) => (
  <div key={badge.id} className="badge">
    <div className="badge-logo">
      <img src={badgeIcon} alt="badge" width="90%" />
    </div>
    <div className="text-container">
      <div className="badge-header">{badge.badgeHeader}</div>
      <div className="badge-text">{badge.badgeText}</div>
    </div>
  </div>
));

const contactText = <span className="encourage-contact-text">Do you have any questions?</span>

const EncourageView = () => {
  return (
    <div className="encourage-view-container">
      <span className="encourage-view-container-text">Why would you choose us?</span>
        <div className="badges-container">{badgeMapped}</div>

      <span className="slider-text">Take a brief look at boosters' ranks!</span>
        <Photoslider />

      <span className="encourage-opinion-text">Check our customers' opinions!</span>

      <Buttons contactText={contactText}/>
    </div>
  );
};

export default EncourageView;