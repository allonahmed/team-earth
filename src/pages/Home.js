import React from "react";
import { Parallax } from "react-parallax";
import NavWave from "../media/svg/layered-waves-haikei.svg";
import HomeLanding from "../components/home/HomeLanding";
import HomeContent from "../components/home/HomeContent";
import HomeData from "../components/home/HomeData";
import HomeNews from "../components/home/HomeNews";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Parallax bgClassName="bg-wave" bgImage={NavWave} strength={500}>
        <HomeLanding />
        <HomeContent />
        <HomeData />
        <HomeNews />
      </Parallax>
    </div>
  );
};

export default Home;
