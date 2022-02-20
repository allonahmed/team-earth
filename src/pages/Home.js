import React from "react";
import HomeLanding from "../components/home/HomeLanding";
import HomeContent from "../components/home/HomeContent";
import HomeData from "../components/home/HomeData";
import HomeNews from "../components/home/HomeNews";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <HomeLanding />
      <HomeContent />
      <HomeData />
      <HomeNews />
    </div>
  );
};

export default Home;
