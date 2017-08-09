import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const title = video.snippet.title;
  const desc = video.snippet.description;
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-lg-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <div className="description">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
