import React from "react";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../styles/home.css";
import { heroImages } from "../components/home/heroImages";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero-container">
        <Swiper
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          className="mySwiper"
          centeredSlides={true}
          spaceBetween={30}
        >
          {heroImages.map((image) => {
            return (
              <SwiperSlide key={image}>
                <Parallax
                  bgImage={image}
                  alt="hero image for home page"
                  strength={500}
                  style={{ height: "100%", width: "100%", objectFit: "fill" }}
                ></Parallax>
                {/* <img src={image} className="home-hero-container-img" /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="home-mission-statement">hello</div>
    </div>
  );
};

export default Home;
