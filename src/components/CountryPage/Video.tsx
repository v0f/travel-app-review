import React from 'react';
import { Player, ControlBar} from 'video-react';

const Video = () => {

  return (
    <Player
    playsInline
    poster="https://video-react.js.org/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <ControlBar
      autoHide={true}
      autoHideTime={500}
      />
      
    </Player>
  );
};

export default Video;
