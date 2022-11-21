import React, { useState, useEffect, useRef } from "react";
import "../styles/video_view_styles.scss";

const VideoViewPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoURL = `https://www.youtube.com/embed/fgXgcLIIsjc`;

  return (
    <div className="videoContainer">
      <div className="videoTitleContainer">
        <span className="videoTitle">
          Feel the excellent wet braking with Driveways!{" "}
        </span>
        <button className="videoBtn screen-l">Watch All Videos</button>
      </div>

      <iframe
        ref={iframeRef}
        title={"improved wet brakıng"}
        width="100%"
        height={"100%"}
        src={videoURL}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <button className="videoBtn screen-s">Watch All Videos</button>
    </div>
  );
};
export default VideoViewPage;
