import React from "react";

//error page when users puts in invalid URL

const Error = () => {
  return (
    <div
      className="lower"
      style={{
        color: "red",
        fontSize: "30px",
        textAlign: "center"
      }}
    >
      This page does not exist, just like the future of Earth if we do not take
      care of it!
    </div>
  );
};

export default Error;
