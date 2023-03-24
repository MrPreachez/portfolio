import { useState } from "react";
import "./VideoPlayer.scss";


function VideoPlayer ({ src }){
  const [videoSrc, setVideoSrc] = useState(src);

  const handleVideoLoaded = () => {
    // When the video is loaded, set the "loaded" attribute to true
    setVideoSrc((prevSrc) => ({ ...prevSrc, loaded: true }));
  };

  return (
    <>
      <video
        src={videoSrc.path}
        controls
        width="100%"
        onLoadedData={handleVideoLoaded}
        type="video/mp4"
      >
        Sorry, your browser doesn't support embedded videos.
      </video>
      {!videoSrc.loaded && <p>Loading...</p>}
    </>
  );
};

export default VideoPlayer;
