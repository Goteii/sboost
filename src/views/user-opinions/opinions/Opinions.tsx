import React from "react";

import DisplayStars from "../../../shared/components/stars/DisplayStars";

import { OpinionsProps } from "../models";

const Opinions = ({ opinions, loading }: OpinionsProps) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {opinions.map((opinions: any) => (
        <div className="opinion">
          <div className="author-header-container">
            <div className="author-header">{opinions.username}</div>
          </div>
          <div className="author-body-container">
            <div className="author-body">{opinions.opinion}</div>
          </div>
          <div className="author-body-container-stars">
            <div className="author-body-stars"><DisplayStars rating={opinions.rating}/></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Opinions;
