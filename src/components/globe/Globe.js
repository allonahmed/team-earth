import React from "react";
import ReactGlobe from "react-globe";

const Globe = ({ height, width, options }) => {
  return (
    <ReactGlobe
      height={height}
      width={width}
      options={options}
      globeBackgroundTexture={null}
      focus={null}
      style={{ border: "1px !important" }}
    />
  );
};

export default Globe;
