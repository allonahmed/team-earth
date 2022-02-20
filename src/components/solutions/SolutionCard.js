import React, { useState, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const SolutionCard = ({
  frontImage,
  frontText,
  backImage,
  backText,
  setCount,
  checkSolutions,
  checkProblems,
  setProblems,
  setSolutions
}) => {
  const [flip, setFlip] = useState(false); //state for card flip

  //on checkbox update, update flip
  useEffect(() => {
    if (checkSolutions) {
      setFlip(true);
    } else if (checkProblems) {
      setFlip(false);
    }
  }, [checkProblems, checkSolutions]);

  //update count when card is flipped
  useEffect(() => {
    if (!flip) {
      setCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    } else if (flip) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [flip, setCount]);

  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={false}
      isFlipped={checkSolutions ? true : checkProblems ? false : flip}
      flipDirection="horizontal"
      className="flippy"
    >
      <FrontSide
        style={{ background: "rgba(200,50,50, 0.7)" }}
        onClick={() => {
          setFlip(true);
          setProblems(false);
        }}
      >
        <div>image goes here</div>
        <div>{frontText}</div>
      </FrontSide>
      <BackSide
        style={{ background: "rgba(50,200,50, 0.7)" }}
        onClick={() => {
          setFlip(false);
          setSolutions(false);
        }}
      >
        <div>image goes here</div>
        <div>{backText}</div>
      </BackSide>
    </Flippy>
  );
};

export default SolutionCard;
