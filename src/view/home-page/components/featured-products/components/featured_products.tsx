import React, { useRef, useState } from "react";
import IconButton from "core/components/buttons/icon_button";
import sliderScrollFn from "core/functions/slider_scroll";
import "../styles/featured_products.scss";
import CarouselsCard from "./card";
import { dataArr } from "./featured_products_data";

interface dataArrProps {
  title: string;
  description: string;
}

const FeaturedProducts = () => {
  const newsSliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const nextFn = () => {
    setSliderIndex(
      sliderIndex === dataArr.length - 1 ? dataArr.length - 1 : sliderIndex + 1
    );
    sliderScrollFn(newsSliderRef.current!, 30, 370, 50);
  };

  const backFn = () => {
    setSliderIndex(sliderIndex === 0 ? 0 : sliderIndex - 1);
    sliderScrollFn(newsSliderRef.current!, 30, 370, -50);
  };

  const dotsfunc = (data: dataArrProps, index: number) => {
    setSliderIndex(index);
    document.getElementById("newsSlider1")?.scrollTo({
      behavior: "smooth",
      left:
        index === 0
          ? -160 + (document.getElementById(data.title)?.offsetLeft ?? 10)
          : -26 + (document.getElementById(data.title)?.offsetLeft ?? 180),
    });
  };

  return (
    <div className="newsContainer">
      <span className="featuredText">Featured Products</span>

      <div className="newsSliderContainer">
        <IconButton
          next={false}
          onClick={() => {
            backFn();
          }}
        />
        <div id="newsSlider1" className="newsSlider" ref={newsSliderRef}>
          {dataArr.map((data) => {
            return (
              <div id={data.title}>
                <CarouselsCard
                  description={data.description}
                  title={data.title}
                />
              </div>
            );
          })}
        </div>

        <IconButton
          onClick={() => {
            nextFn();
          }}
        />
      </div>
      <div className="newsSlider">
        {dataArr.map((data, index) => {
          return (
            <button
              className="newsSliderDot"
              onClick={() => {
                dotsfunc(data, index);
              }}
              style={{
                width: sliderIndex === index ? " 12px " : "6px",
                height: sliderIndex === index ? " 12px " : "6px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
