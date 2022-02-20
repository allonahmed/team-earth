import React, { useState, useEffect } from "react";
import Globe from "../globe/Globe";
import options from "../globe/Globe.options";
import ambientSettings from "./AmbientSettings";

const SolutionsGlobe = ({ count }) => {
  const [globeOptions, setOptions] = useState({
    ...options,
    cameraAutoRotateSpeed: 1,
    enableCameraRotate: true
  });

  //when count is updated, update our options instance with ambient settings that correspond with count
  useEffect(() => {
    setOptions({
      ...options,
      ambientLightColor: ambientSettings[count].ambientLightColor,
      ambientLightIntensity: ambientSettings[count].ambientLightIntensity
    });
  }, [count]);

  return <Globe height="500px" width="500px" options={globeOptions} />;
};

export default SolutionsGlobe;
