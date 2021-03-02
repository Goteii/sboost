import React from "react";
import { Link } from "react-router-dom";

import {homeLinksArr, social, follow} from "./utils";

import { sbLogo } from "../../shared/images/SharedIcons";

import classes from "./styles.module.scss";

const FooterView = () => {

  const homeLinks = homeLinksArr.map((homeLink) => (
    <li key={homeLink.id} className={classes.link}>
      <Link to={homeLink.linkTo} className={classes.link}>
        <span> {homeLink.text} </span>
      </Link>
    </li>
  ));

  const socialMapped = social.map(social => (
    <li key={social.id}>
      <a href={social.linkTo}>
        <img src={social.imgSrc} alt={social.altText} />
      </a>
    </li>
  ));

  const followMapped = follow.map(follow => (
    <li key={follow.id}>
      <a href={follow.linkTo}>
        <img src={follow.imgSrc} alt={follow.altText} />
        </a>
    </li>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={sbLogo} alt="smite-boost-logo" className={classes.logo}/>
        </Link>
        <span>
          Getting higher rank was never easier..
        </span>
      </div>

      <ul className={classes.links}>
        <span> Home Links </span>
          {homeLinks}
      </ul>
      
      <div className={classes.social}>
        <span>You can contact us anytime..</span>
        <ul className={classes.icons}>
          {socialMapped}
        </ul>
      </div>

      <div className={classes.follow}>
        <span>and follow us to be up-to-date!</span>
        <ul className={classes.icons}>
            {followMapped}
        </ul>
      </div>

    </div>
  );
};

export default FooterView;
