import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { OpinionPayload } from "../../../api/services/opinions/models";
import { createOpinion } from "../../../api/services/opinions/opinionsService";
import ClickableStars from "../../../shared/components/stars/ClickableStars";

import "./OpinionStyles.scss";

const Opinion = (props: any) => {
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState(0);

  // Wyswietla tylko 'string' jako nazwa uzytkownika

  const handleClick = (ratingValue: any) => {
    setRating(ratingValue);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const newOpinion: OpinionPayload = {
        opinion: opinion,
        rating: rating
      }
      await createOpinion(newOpinion);
    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="opinion-container">
      <div className="opinion-text">
        <span className="header"> Rate us!</span>
        <span className="small-text">
          Give us feedback about how your service went! Did you learn a lot? Did
          it go better than you have expected? Tell us everything and help
          improving and grow!
        </span>
      </div>
      <form className="form-opinion-dashboard">
        <div className="opinion">
          <div className="opinion-user">Your feedback:</div>
          <div className="opinion-message">
            <textarea
              maxLength={300}
              value={opinion}
              placeholder="Send us your opinion!"
              onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
                setOpinion(ev.target.value)
              }
              className="textarea-styling"
            ></textarea>
          </div>
        </div>
        <div className="opinion-rate">
          <ClickableStars rating={rating} handleClick={handleClick} />
        </div>
        <div className="opinion-button">
          <button
            type="submit"
            className="opinion-dashboard-button"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Opinion);
