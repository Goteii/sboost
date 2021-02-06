import React from "react";


import Photoslider from "./photo-slider/Photoslider";
import Buttons from "./buttons/ButtonsEncourage";
import HowToOrder from "./how-to-order/HowToOrder";
import Rules from './rules/Rules';

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
const opinionText = <span className="encourage-opinion-text">Check our customers' opinions!</span>

const EncourageView = () => {
  return (
    <div className="encourage-view-container">
      <span className="encourage-view-container-text">Why would you choose us?</span>
        <div className="badges-container">{badgeMapped}</div>

      <div className="carousel">
        <span className="slider-text">Take a brief look at boosters' ranks!</span>
        <Photoslider />
      </div>
      
      <Buttons contactText={contactText} opinionText={opinionText}/>

      <div className="how-to-order">
      <HowToOrder />
      <Rules />
      </div>
    </div>
  );
};

export default EncourageView;