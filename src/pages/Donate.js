import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs, FreeMode, Pagination } from "swiper";
import DonateData from "../components/donate/Donate.data";

import "../styles/donate.css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/thumbs";

const Donate = () => {
  const [thumbs, setThumbs] = useState(null);
  useEffect(() => {
    console.log(thumbs);
  });
  return (
    <div className="donate-container">
      <div className="brand-container">
        <Swiper
          modules={[Autoplay, Thumbs, FreeMode]}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff"
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          thumbs={{ swiper: thumbs }}
          className="donate-slider"
        >
          {DonateData.map((data, key) => {
            return (
              <SwiperSlide key={key} className="donate-slide">
                <img
                  className="featured-image"
                  src={data.image}
                  alt={`${data.title} brand logo`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbs}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="spinner"
        >
          {DonateData.map((data, id) => {
            return (
              <SwiperSlide
                className={`content${id + 1} img-container`}
                key={id}
              >
                <img
                  className="brand-image"
                  src={data.image}
                  alt={`${data.title} brand logo`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Donate;
