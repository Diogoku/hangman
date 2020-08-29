import React from "react";
import { useSelector } from "react-redux";
import hangman0 from "../images/hangman0.png";
import hangman1 from "../images/hangman1.png";
import hangman2 from "../images/hangman2.png";
import hangman3 from "../images/hangman3.png";
import hangman4 from "../images/hangman4.png";
import hangman5 from "../images/hangman5.png";
import hangman6 from "../images/hangman6.png";

function Hangman() {
  const { wrongLetters } = useSelector((state) => state.HangmanReducer);
  let image;
  if (wrongLetters.length === 0) image = hangman0;
  else if (wrongLetters.length === 1) image = hangman1;
  else if (wrongLetters.length === 2) image = hangman2;
  else if (wrongLetters.length === 3) image = hangman3;
  else if (wrongLetters.length === 4) image = hangman4;
  else if (wrongLetters.length === 5) image = hangman5;
  else if (wrongLetters.length === 6) image = hangman6;
  return (
    <div>
      <img src={image} alt="hangman stage" className="hangman-image"></img>
    </div>
  );
}

export default Hangman;
