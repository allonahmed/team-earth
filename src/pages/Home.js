import React, { useRef } from "react";
import HeroImage from "../media/images/pexels.jpg";
import "../styles/home.css";
import { useParallax } from "react-scroll-parallax";
const Home = () => {
  const target = useRef(null);
  const parallax = useParallax({
    speed: -100,
    targetElement: target.current
  });
  return (
    <div className="home">
      <div className="home-hero-container">
        <img
          ref={parallax.ref}
          className="home-hero-container-img"
          src={HeroImage}
          alt="hero image on main screen"
        />
      </div>
      <div className="home-mission-statement">hello</div>
    </div>
  );
};

export default Home;
