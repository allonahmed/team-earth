import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Thumbs, FreeMode } from "swiper";
import sliderData from "./LandingSlider.data";
import "swiper/css/pagination";
import "swiper/css";

const Slider = () => {
  const [thumbs, setThumbs] = useState(null);

  return (
    <div className="landing-slideshow">
      <Swiper
        modules={[Autoplay, EffectCreative, Thumbs]}
        effect="creative"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
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
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        thumbs={{ swiper: thumbs }}
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
      <Swiper
        onSwiper={setThumbs}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode]}
        className="thumb-swiper"
      >
        {sliderData.map((slides, id) => {
          return (
            <SwiperSlide className="thumb-slides" key={id}>
              {" "}
              <button className="thumb-button">
                {slides.icon}{" "}
                <p style={{ paddingLeft: "4px" }}>{slides.buttonContent}</p>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
