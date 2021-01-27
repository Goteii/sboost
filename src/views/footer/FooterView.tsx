import React from "react";
import { Link } from "react-router-dom";

import {homeLinksArr} from "./utils";

import { fbFooterLogo, gmailLogo, sbLogo, twitterLogo } from "../../shared/images/SharedIcons";


import "./FooterViewStyles.scss";

const FooterView = () => {

  const homeLinks = homeLinksArr.map((homeLink) => (
    <li key={homeLink.id} className="link">
      <Link to={homeLink.linkTo} className="footer-link">
        <span> {homeLink.text} </span>
      </Link>
    </li>
  ))

  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Link to="/">
          <img src={sbLogo} alt="Footer logo" className="logo"/>
        </Link>
        <span>
          Getting higher rank was never easier..
        </span>
      </div>

      <ul className="footer-mainpage-links">
        <span> Home Links </span>
          {homeLinks}
      </ul>
      
      <div className="footer-social">
        <span>You can contact us anytime..</span>
        <ul className="icons">
          <li className="contact" id="fb">
            <a href="https://www.facebook.com/sbsmiteboost/">
              <img src={fbFooterLogo} alt="fb_logo" />
            </a>
          </li>
          <li className="contact" id="twitter">
            <a href="https://twitter.com/BoostSmite">
              <img src={twitterLogo} alt="twitter_logo" />
            </a>
          </li>
          <li className="contact" id="gmail">
            <a href="mailto:smiteboostrank@gmail.com?subject=Smite%20Boosting">
            <img src={gmailLogo} alt="gmail_logo" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-follow">
        <span>and follow us to be up-to-date!</span>
        <ul className="icons">
          <li className="follow">
            <a href="https://www.facebook.com/sbsmiteboost/">
              <img src={fbFooterLogo} alt="fb_logo" />
            </a>
          </li>
          <li className="follow">
            <a href="https://twitter.com/BoostSmite">
              <img src={twitterLogo} alt="twitter_logo" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default FooterView;
