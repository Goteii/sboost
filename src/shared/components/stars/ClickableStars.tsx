import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { StarsProps } from "./models";


const ClickableStars = ({ rating, handleClick }: StarsProps) => {
  const [hover, setHover] = useState(0);
  if (handleClick == null) {
    return null;
  }
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#444444"}
              size={35}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <div>The rate is {rating}</div>
    </div>
  );
};

export default ClickableStars;
