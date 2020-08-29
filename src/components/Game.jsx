import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import {
  getState,
  winGame,
  loseGame,
  playAgain,
  createState,
} from "../actions/hangmanActionCreators";

// COMPONENTS
import CreateSecret from "./forms/CreateSecret.jsx";
import ChooseLetter from "./forms/ChooseLetter.jsx";
import Letters from "./Letters.jsx";
import LettersUsed from "./LettersUsed.jsx";
import Hangman from "./Hangman.jsx";
import FinalResult from "./FinalResult.jsx";

export default function game() {
  const state = useSelector((state) => state.HangmanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const secret = JSON.parse(localStorage.getItem("secret"));
    const hint = JSON.parse(localStorage.getItem("hint"));
    const attempts = JSON.parse(localStorage.getItem("attempts"));
    const correctLetters = JSON.parse(localStorage.getItem("correct-letters"));
    const wrongLetters = JSON.parse(localStorage.getItem("wrong-letters"));
    const gameState = JSON.parse(localStorage.getItem("game-state"));
    if (
      secret == null ||
      hint == null ||
      attempts == null ||
      correctLetters == null ||
      wrongLetters == null ||
      gameState == null
    ) {
      dispatch(createState({ secret: [], hint: "" }));
    } else {
      dispatch(
        getState(
          secret,
          hint,
          attempts,
          correctLetters,
          wrongLetters,
          gameState
        )
      );
    }
  }, []);

  useEffect(() => {
    if (state.wrongLetters != null) {
      if (state.wrongLetters.length === 6) dispatch(loseGame());
    }
  }, [state.wrongLetters]);

  useEffect(() => {
    if (state.secret.length > 0) {
      if (state.correctLetters != null) {
        let counter = 0;
        let secret = state.secret.filter((str) => /\S/.test(str));
        state.correctLetters.forEach((correctLetter) => {
          secret.forEach((secretLetter) => {
            if (correctLetter === secretLetter) counter++;
          });
        });
        if (counter === secret.length) dispatch(winGame());
      }
    }
  }, [state.correctLetters]);

  return (
    <div>
      {state.gameState == "create secret" || state.gameState == null ? (
        <CreateSecret />
      ) : (
        <div className="game-wrapper">
          <Hangman />
          <Letters />

          <ChooseLetter />
          <LettersUsed />
          <div className="hint-wrapper">
            <h2>Pista</h2>
            <p>{state.hint}</p>
          </div>
          {state.gameState == "create secret" ||
          state.gameState == "playing" ? null : state.gameState == "win" ? (
            <FinalResult result={"win"} />
          ) : (
            <FinalResult result={"lose"} />
          )}
          <button
            className="play-again-button"
            onClick={() => {
              dispatch(playAgain());
            }}
          >
            Novo Jogo
          </button>
        </div>
      )}
    </div>
  );
}
