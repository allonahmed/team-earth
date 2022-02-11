import React from "react";
import { GlobeGirl } from "../../assets/SVGExport";
import Slider from "./LandingSlider";

const HomeLanding = () => {
  return (
    <div>
      <div className="landing-container">
        <img className="home-globe-girl" src={GlobeGirl} alt="globe girl svg" />
        <div className="landing-text-container">
          <div className="landing-text-content">
            <h2>Time to change the world</h2>
            <p>
              Our mission is to spread information and provide insight on how we
              can prevent climate change from destroying our planet Earth!
            </p>
          </div>
          <Slider />
        </div>
        <button
          className="landing-leave-button"
          // on click broken for some reason
          onClick={() => window.scrollBy(0, window.innerHeight)}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default HomeLanding;
