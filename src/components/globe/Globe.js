import React from "react";
import ReactGlobe from "react-globe";

const Globe = ({ height, width, options }) => {
  return (
    <ReactGlobe
      height={height}
      width={width}
      options={options}
      globeBackgroundTexture={null}
    />
  );
};

export default Globe;
