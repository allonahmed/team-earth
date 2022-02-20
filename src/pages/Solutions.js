import React, { useState, useEffect } from "react";
import SolutionCard from "../components/solutions/SolutionCard";
import CardData from "../components/solutions/SolutionCardData";
import SolutionsGlobe from "../components/solutions/SolutionsGlobe";
import "../styles/solutions.css";

const Solutions = () => {
  const [count, setCount] = useState(0); //keep track of count of cards flipped
  const [checkProblems, setProblems] = useState(true);
  const [checkSolutions, setSolutions] = useState(false);
  console.log("count:", count);
  console.log("allproblems:", checkProblems);
  console.log("allsolutions:", checkSolutions);

  useEffect(() => {
    if (count === 9) setSolutions(true);
    else if (count === 0) setProblems(true);
  }, [count]);

  return (
    <div className="solutions-container">
      <div className="solutions-heading">
        <h2>This is the earth in 100 years if we do not make a change</h2>
        <h5>Click on the cards to see how we can make a change!</h5>
        <div>
          {" "}
          <label htmlFor="flip">
            <input
              type="checkbox"
              id="flip"
              checked={checkProblems}
              onChange={() => {
                setProblems(true);
                setSolutions(false);
              }}
            />{" "}
            All problems{" "}
          </label>
          <label htmlFor="flip">
            <input
              type="checkbox"
              id="flip"
              checked={checkSolutions}
              onChange={() => {
                setProblems(false);
                setSolutions(true);
              }}
            />
            All Solutions{" "}
          </label>
        </div>
      </div>
      <div className="solutions-content">
        <div className="solutions-globe-container">
          <SolutionsGlobe count={count} />
        </div>

        <div className="solutions-cards-container">
          {" "}
          {CardData.map((card, id) => {
            return (
              <SolutionCard
                key={id}
                frontImage={card.frontImage}
                backImage={card.backImage}
                frontText={card.frontText}
                backText={card.backText}
                setCount={setCount}
                checkProblems={checkProblems}
                checkSolutions={checkSolutions}
                setProblems={setProblems}
                setSolutions={setSolutions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
