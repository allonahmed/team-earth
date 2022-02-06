import React, { useState } from "react";
import Nav from "./Nav";
import "../../styles/nav.css";
import Header from "./Header";

import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setOpen] = useState(undefined);
  const [isHovered, setHovered] = useState(null);

  const iconAnimation = {
    open: {
      transform: "rotateZ(180deg)"
      // margin: "-10px 0 0 0"
    },
    close: {
      transform: "rotateZ(-180deg)"
      // margin: "-10px 0 0 0"
    },
    undefined: {
      transform: "none"
    }
  };

  return (
    <div className="NavBar">
      <Header />
      {/* <div className="dropdown-icon"> */}
      {/* <AnimatePresence>
          <motion.div
            animate={
              isOpen === true
                ? "open"
                : isOpen === undefined
                ? "undefined"
                : "close"
            }
            variants={iconAnimation}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? (
              <CloseIcon onClick={() => setOpen(false)} />
            ) : (
              <MenuIcon onClick={() => setOpen(true)} />
            )}
          </motion.div>
        </AnimatePresence>
      </div> */}
      <Nav />
      {/* <Nav classStyle="nav" isOpen={isOpen} /> */}
    </div>
  );
};

export default NavBar;
