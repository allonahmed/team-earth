import React from "react";
import ReactGlobe from "react-globe";
import options from "./Globe.options.js";
import "../../styles/nav.css";

const Globe = () => {
  const [globeOptions, setOptions] = React.useState(options);

  return (
    <div
      onMouseOver={() =>
        setOptions({ ...globeOptions, cameraAutoRotateSpeed: 40 })
      }
      onMouseOut={() =>
        setOptions({ ...globeOptions, cameraAutoRotateSpeed: 10 })
      }
    >
      <ReactGlobe
        height="90px"
        width="90px"
        options={globeOptions}
        globeBackgroundTexture={null}
      />
    </div>
  );
};

export default Globe;
