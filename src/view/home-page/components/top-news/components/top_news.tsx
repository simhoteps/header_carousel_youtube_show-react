import React from "react";

import "../styles/top_news_styles.scss";

const TopNews = () => {
  return (
    <div className="container">
      <img src="news_img.png" alt="Snow" style={{ width: "100%" }} />
      <div className="content">
        <span className="text">
          Nothing can stop <br /> you
        </span>
        <button className="btn">FIND OUT MORE</button>
      </div>
    </div>
  );
};
export default TopNews;
