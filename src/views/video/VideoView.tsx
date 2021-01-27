import React from "react";

import "./VideoViewStyles.scss";

const Video = () => {
  const link =
    "https://www.youtube.com/embed/WlNDXGvLFxk?autoplay=1&rel=0&controls=0"; // setOnRepeat if possible

  return (
    <div className="video-container">
      <div className="video-color"></div>
      <div className="video-text">
        <span>
          Welcome to Smite-boost! - The safest and most reliable mmr & division
          boosting site worldwide!
        </span>
      </div>
      <div className="video-player">
        <iframe
          title="player"
          width="100%"
          height="132%"
          src={link}
        
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
  
      </div>
    </div>
  );
};

export default Video;
