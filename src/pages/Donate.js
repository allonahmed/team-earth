import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Thumbs, FreeMode } from "swiper";
import DonateData from "../components/donate/Donate.data";

import "../styles/donate.css";
// import "swiper/css/pagination";
// import "swiper/css";

const Donate = () => {
  const [thumbs, setThumbs] = useState(null);
  return (
    <div className="donate-container">
      <div className="brand-container">
        <Swiper
          modules={[Autoplay, Thumbs]}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff"
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
          className="donate-slider"
        >
          {DonateData.map((data, id) => {
            return (
              <SwiperSlide key={id} className="donate-slide">
                <img
                  className="brand-image"
                  src={data.image}
                  alt={`${data.title} brand logo`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="spinner">
          {DonateData.map((data, id) => {
            return (
              <div className={`content${id + 1} img-container`} key={id}>
                <img
                  className="brand-image"
                  src={data.image}
                  alt={`${data.title} brand logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Donate;
