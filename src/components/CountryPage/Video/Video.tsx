import React from 'react';
import { Player, ControlBar} from 'video-react';

interface IVideo{
  videoURL: string;
  videoPoster: string;
}

const Video: React.FC<IVideo> = ({ videoURL, videoPoster } ) => {

  return (
    <Player
    playsInline
    poster={videoPoster}
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
