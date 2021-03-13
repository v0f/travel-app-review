import React from 'react';
import { Player } from 'video-react';

const Video = () => {
  return (
    <Player
      playsInline
      poster="https://video-react.js.org/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

export default Video;
