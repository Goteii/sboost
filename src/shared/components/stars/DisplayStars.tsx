import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { StarsProps } from "./models";

const DisplayStars = ({ rating }: StarsProps) => {
  const [hover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <FaStar
              className="star-display"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#444444"}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

export default DisplayStars;
