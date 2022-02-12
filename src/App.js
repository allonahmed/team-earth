import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLinks from "./components/navigation/NavLinks";
import "./App.css";
import Home from "./pages/Home";
import Error from "./assets/Error";
import Nav from "./components/navigation/Nav";
import Header from "./components/navigation/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />

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
