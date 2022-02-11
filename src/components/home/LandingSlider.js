import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import sliderData from "./LandingSlider.data";

import "swiper/css/pagination";
import "swiper/css";

const Slider = () => {
  return (
    <div className="landing-slideshow">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3000
        }}
        className="mySwiper"
      >
        {sliderData.map((element, id) => {
          return (
            <SwiperSlide key={id}>
              <img
                src={element.svg}
                className="landing-slideshow-svg"
                alt="svg for landing page slider"
              />
              <p className="landing-slide-text">{element.textContent}</p>
              <button className="landing-cta-button">
                {element.buttonContent}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
