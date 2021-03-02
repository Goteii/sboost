import React, { useEffect } from "react";

import {aboutObj} from "./Utils";

import "./styles.scss";

const AboutView = () => {
  useEffect(() => {
    document
    .querySelector(".about-container")
    ?.scrollIntoView({ behavior: "smooth" });
  })

    const aboutMapped = aboutObj.map((about) => (
      <div>
        <li key={about.id} className="description-headers">
          {about.header}
        </li>
        <span className="description-text">{about.body}</span>
      </div>
    ));
    
    return (
      <div className="about-container">
        <div className="about-maintext">
          <span>About us!</span>
        </div>
        <div className="about-description">
          <ul className="description-list">
            {aboutMapped}
          </ul>
        </div>
      </div>
    );
  }

export default AboutView;