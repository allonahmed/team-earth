import React from "react";

const HomeContent = () => {
  return (
    <div className="home-content-container">
      {" "}
      + home content goes here. ex:
      <iframe
        title="climate change data"
        src="https://data.worldbank.org/share/widget?indicators=EN.ATM.CO2E.KT&topics=%5Bobject%20Object%5D"
        width="450"
        height="300"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default HomeContent;
