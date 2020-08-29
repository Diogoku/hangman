import React from "react";
import { useSelector } from "react-redux";

function LettersUsed() {
  const { correctLetters, wrongLetters } = useSelector(
    (state) => state.HangmanReducer
  );

  return (
    <div className="letters-used-wrapper">
      <h2>Letters Used</h2>
      <div className="letters-used-wrapper-extension">
        {wrongLetters.map((letter, index) => {
          return (
            <p className="letters-used wrong-letters" key={index}>
              {letter}
            </p>
          );
        })}
        {correctLetters.map((letter, index) => {
          return (
            <p className="letters-used correct-letters" key={index}>
              {letter}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default LettersUsed;
