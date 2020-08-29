import React from "react";
import { useSelector } from "react-redux";
import hangman0 from "../images/hangman0.PNG";
import hangman1 from "../images/hangman1.PNG";
import hangman2 from "../images/hangman2.PNG";
import hangman3 from "../images/hangman3.PNG";
import hangman4 from "../images/hangman4.PNG";
import hangman5 from "../images/hangman5.PNG";
import hangman6 from "../images/hangman6.PNG";

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
