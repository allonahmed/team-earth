import React from "react";
import Nav from "./Nav";
import "../../styles/nav.css";
import Header from "./Header";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Header />
      <Nav />
    </div>
  );
};

export default NavBar;
