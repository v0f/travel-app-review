import React from 'react';
import { Player, ControlBar} from 'video-react';



interface IVideo{
  videoURL: string;
}


const Video: React.FC<IVideo> = ({ videoURL } ) => {

  return (
    <Player
    playsInline
    // poster="https://video-react.js.org/assets/poster.png"
    src={videoURL}
    >
      <ControlBar
      autoHide={true}
      autoHideTime={500}
      />
      
    </Player>
  );
};

export default Video;
