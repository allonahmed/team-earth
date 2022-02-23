import React, { useEffect, useState } from "react";
import Globe from "../globe/Globe";
import options from "../globe/Globe.options";
import { useLocation } from "react-router-dom";

import "../../styles/nav.css";

const Header = () => {
  const [disable, setDisable] = useState(true);
  const [globeOptions, setOptions] = useState(options);
  const location = useLocation(); // used to get current pathname

  //if current pathname is === to the home url, make the button that reroutes you to home page disabled
  useEffect(() => {
    setDisable(location.pathname === "/");
  }, [location]);

  return (
    <div className="header">
      <div
        className="globe-container"
        onMouseOver={() =>
          setOptions({ ...globeOptions, cameraAutoRotateSpeed: 20 })
        }
        onMouseOut={() =>
          setOptions({ ...globeOptions, cameraAutoRotateSpeed: 2 })
        }
      >
        <Globe height="300px" width="300px" options={globeOptions} />
      </div>
      <button
        onMouseOver={() =>
          setOptions({ ...globeOptions, cameraAutoRotateSpeed: 20 })
        }
        onMouseOut={() =>
          setOptions({ ...globeOptions, cameraAutoRotateSpeed: 2 })
        }
        onClick={() => {
          !disable ? (window.location.href = "/") : console.log("home");
        }}
      >
        <p>
          {" "}
          <span
            style={{
              color: "rgba(238, 238, 238,1)",
              textShadow: "0px 0px 5px black"
            }}
          >
            #
          </span>
          Team World
        </p>
      </button>
    </div>
  );
};

export default Header;
