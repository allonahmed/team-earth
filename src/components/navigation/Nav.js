import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence, useCycle } from "framer-motion";

const Nav = (options) => {
  const [x, cyclex] = useCycle(false, true);
  const sideAnimation = {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        delay: 0.5,
        duration: 0.5
      },

      width: "33vh",
      height: "calc(100vh)"
    },
    close: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      },
      width: 0,
      height: 0
    }
  };

  const linkAnimation = {
    open: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5
      }
    },
    close: {
      opacity: 0
    }
  };

  const buttonAnimation = {
    open: {
      background: "none",
      boxShadow: "none",
      transition: {
        delay: 0.5,
        duration: 0.5
      },
      border: "none"
    },
    close: {
      transition: {
        delay: 1,
        duration: 0.5
      },
      border: "1px solid white",
      background: "rgba(135, 182, 54, 0.95)",
      boxShadow: "0px 0px 4px rgba(255, 255, 255, 1)"
    }
  };

  //need to make the button overlay over the entire navigation when opened

  return (
    <div>
      <motion.button
        className="dropdown-icon"
        onClick={cyclex}
        initial="close"
        animate={x ? "open" : "close"}
        variants={buttonAnimation}
        whileHover={{
          scale: 1.1
        }}
      >
        {x ? <CloseIcon /> : <MenuIcon />}
      </motion.button>
      <AnimatePresence>
        {x && (
          <motion.div
            animate={x ? "open" : "close"}
            initial="close"
            variants={sideAnimation}
            className="nav"
            exit={{
              width: 0,
              height: 0,
              opacity: 0,
              transition: { delay: 0.5, duration: 0.5 },
              borderBottomLeftRadius: "100%"
            }}
          >
            {NavLinks.map((element, id) => {
              return (
                <Link className="nav-link" key={id} to={element.link}>
                  <motion.p
                    key={id}
                    variants={linkAnimation}
                    whileHover={{ scale: 1.1 }}
                    exit={{ opacity: 0 }}
                  >
                    {element.title}
                  </motion.p>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
