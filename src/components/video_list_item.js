import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item list-group-item-action"
    >
      <div className="video-list media">
        <img className="d-flex align-self-center mr-3" src={imgURL} />
        <div className="media-body">
          <h1 className="video-title mt-0">
            {title}
          </h1>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
