import React from "react";

import { contactObj } from "./contactUtils";

import "./ContactStyles.scss";

export const contactMapped = contactObj.map((contact) => (
  <div className="contact-container">
    <div className="contact-image-holder">
      <div className="image-holder">
        <div className="image-button">
          <a href={contact.link} target="_blank" rel="noopener noreferrer">
            <img src={contact.imgSrc} alt={contact.name} />
          </a>
        </div>
        <span>{contact.name}</span>
      </div>
    </div>
  </div>
));

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-holder">{contactMapped}</div>
    </div>
  );
};
export default Contact;
