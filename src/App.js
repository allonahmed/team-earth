import React from "react";
import NavBar from "./components/navigation/NavBar";
import { Routes, Route } from "react-router-dom";
import NavLinks from "./components/navigation/NavLinks";
import "./App.css";
import Home from "./pages/Home";
import Error from "./assets/Error";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {NavLinks.map((element, id) => {
          return (
            <Route key={id} path={element.link} element={element.component} />
          );
        })}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
