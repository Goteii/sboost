import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import RegLogModal from "../reg-log-modal/RegLogModal";

import { getLocalStorageToken } from "../../shared/helpers/storageHelpers";

import { sbLogo, fbLogo, twitterLogoWhite } from "../../shared/images/SharedIcons";

import "./NavbarStyles.scss";

 

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkIfLogged();
  });

  const checkIfLogged = () => {
    const jwt = getLocalStorageToken();
    if (jwt) {
      setIsAuthenticated(true);
    }
  };
  
      const handleShowModal = () => {
      setShowModal(!showModal);
    };
  
      const mobileMenuSlide = () => {
        const nav = document.querySelector('.navbar_bottom');
        const navLinks = document.querySelectorAll<HTMLElement>('.navbar_bottom-button')
        const mobileMenu = document.querySelector('.mobile-menu');
  
        nav?.classList.toggle('navbar-active');
  
          navLinks?.forEach((link, index) => {
            if( link.style.animation) {
              link.style.animation = '';
                }
              else {
                link.style.animation = `mobileMenuFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                   }
                  })
  
        mobileMenu?.classList.toggle('toggle');  
      }
  
      
    return (
      <div>
        <div className="navbar_container">
            <Link to="/">
              <img alt="smite_boost_logo" src={sbLogo} className="navbar_logo" />
            </Link>
  
            <div className="navbar_holder">
              <div className="navbar_top">
  
                <div className="navbar_top_icons_holder">
                  <div className="facebook-icon">
                    <a href="https://www.facebook.com/sbsmiteboost/">
                    <img src={fbLogo} alt="fb_logo" />
                    </a>
                  </div>
                  <div className="twitter-icon">
                    <a href="https://twitter.com/BoostSmite">
                    <img src={twitterLogoWhite} alt="twitter_logo_white" />
                    </a>
                  </div>
                </div>
  
                  <span className ="navbar_top_text">
                    Do you feel that you need to talk with us? Dont waste your time
                    and contact us right now!
                  </span>
            </div>
  
            <div className="navbar_bottom">
              <div className="navbar_bottom-button">
                <span className="navbar_bottom-button-modal" onClick={handleShowModal}>
                    Register/Login
                </span>
                {showModal ? <RegLogModal onClose={handleShowModal} /> : null}
              </div>
              <div className="navbar_bottom-button">
                <Link to="/boosting" className="navbar-link">
                  Buy boosting
                </Link>
              </div>
              <div className="navbar_bottom-button">
                <Link to="/coaching" className="navbar-link">
                  Buy coaching
                </Link>
              </div>
              <div className="navbar_bottom-button">
                <Link to="/opinions" className="navbar-link">
                  Opinions
                </Link>
              </div>
              <div className="navbar_bottom-button">
                <Link to="/about" className="navbar-link">
                  About us
                </Link>
              </div>
        
            </div>
  
            <div className="mobile-menu" onClick={mobileMenuSlide}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
