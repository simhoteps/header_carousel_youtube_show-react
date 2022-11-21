import React from "react";
import FeaturedProducts from "view/home-page/components/featured-products/components/featured_products";
import TopNews from "view/home-page/components/top-news/components/top_news";
import VideoViewPage from "view/home-page/components/video/components/video_view";

const HomePage = () => {
  return (
    <div className="container">
      <TopNews />
      <FeaturedProducts />
      <VideoViewPage />
    </div>
  );
};
export default HomePage;
