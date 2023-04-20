import "./VideoPlayer.scss";

function VideoPlayer({vidId}) {
  return (
    <div className="video__contain">
      <iframe
        className="video__iframe"
        src={`https://www.youtube.com/embed/${vidId}`}
        title={vidId}
        controls
        type="video/mp4"
      >
        Sorry, your browser doesn't support embedded videos.
      </iframe>
      {!vidId.loaded && <p>Loading...</p>}
    </div>
  );
}

export default VideoPlayer;
