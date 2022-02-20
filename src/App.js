import React from "react";
import { Routes, Route } from "react-router-dom";
import { Parallax } from "react-parallax";
import NavLinks from "./components/navigation/NavLinks";
import Nav from "./components/navigation/Nav";
import Header from "./components/navigation/Header";
import Home from "./pages/Home";
import Error from "./assets/Error";
import NavWave from "./media/svg/layered-waves-haikei.svg";

import "./App.css";
import "./styles/nav.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Parallax bgClassName="bg-wave" bgImage={NavWave} strength={500}>
        <Routes>
          {NavLinks.map((element, id) => {
            return (
              <Route key={id} path={element.link} element={element.component} />
            );
          })}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Parallax>
    </div>
  );
};

export default App;
