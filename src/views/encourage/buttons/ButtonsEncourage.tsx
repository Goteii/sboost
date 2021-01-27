import React from 'react'

import { Link } from "react-router-dom";

import "./styles.scss";

const ButtonsEncourage = ({contactText}: any) => {
    return (
        <div className="buttons-container">
            <div className="button-opinion-button">
                <div className="btn-contact">
                <Link to="opinions"  className="btn-contact-link">
                        Opinions
                    </Link>
                </div>
            </div>
            {contactText}
            <div className="button-contact-button">
            <div className="btn-contact">
                    <a href="https://www.facebook.com/sbsmiteboost/" 
                    className="btn-contact-link">
                        Contact us!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ButtonsEncourage;
