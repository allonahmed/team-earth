import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import sliderData from "./LandingSlider.data";

import "swiper/css/pagination";
import "swiper/css";

const Slider = () => {
  return (
    // <div className="landing-slideshow">
    <Swiper
      modules={[Autoplay, Pagination, EffectCreative]}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-150%", 0, -500]
        },
        next: {
          shadow: true,
          translate: ["150%", 0, -500]
        },
        shadowPerProgress: 0.5
      }}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      className="landing-swiper"
    >
      {sliderData.map((element, id) => {
        return (
          <SwiperSlide key={id} className="landing-slides">
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
    // </div>
  );
};

export default Slider;
