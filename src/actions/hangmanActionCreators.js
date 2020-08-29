import {
  CREATE_SECRET,
  ATTEMPT,
  CORRECT_GUESS,
  WRONG_GUESS,
  GET_STATE,
  WIN_GAME,
  LOSE_GAME,
  PLAY_AGAIN,
  CREATE_STATE,
} from "./types";

// ACTIONS CREATORS

// PLAY AGAIN (NEW GAME)
export const playAgain = () => {
  localStorage.removeItem("secret");
  localStorage.removeItem("hint");
  localStorage.removeItem("attempts");
  localStorage.removeItem("wrong-letters");
  localStorage.removeItem("correct-letters");
  localStorage.removeItem("game-state");
  return {
    type: PLAY_AGAIN,
  };
};

// CREATE STATE
export const createState = () => {
  localStorage.setItem("secret", JSON.stringify([]));
  localStorage.setItem("hint", JSON.stringify(""));
  localStorage.setItem("attempts", JSON.stringify(0));
  localStorage.setItem("wrong-letters", JSON.stringify([]));
  localStorage.setItem("correct-letters", JSON.stringify([]));
  localStorage.setItem("game-state", JSON.stringify("create secret"));
  return {
    type: CREATE_STATE,
  };
};

// CREATE SECRET
export const createSecret = (secret, hint) => {
  secret = secret.map((secretLetter) => {
    return secretLetter.toUpperCase();
  });
  localStorage.setItem("secret", JSON.stringify(secret));
  localStorage.setItem("hint", JSON.stringify(hint));
  localStorage.setItem("attempts", JSON.stringify(0));
  localStorage.setItem("wrong-letters", JSON.stringify([]));
  localStorage.setItem("correct-letters", JSON.stringify([]));
  localStorage.setItem("game-state", JSON.stringify("playing"));
  return {
    type: CREATE_SECRET,
    secret: secret,
    hint: hint,
  };
};

// GET STATE
export const getState = (
  secret,
  hint,
  attempts,
  correctLetters,
  wrongLetters,
  gameState
) => {
  return {
    type: GET_STATE,
    secret: secret,
    hint: hint,
    attempts: attempts,
    correctLetters: correctLetters,
    wrongLetters: wrongLetters,
    gameState: gameState,
  };
};

// GUESS
export const guess = (letter) => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch({
      type: ATTEMPT,
    });
    if (state.HangmanReducer.secret.includes(letter)) {
      let localStorageCorrectLetters = JSON.parse(
        localStorage.getItem("correct-letters")
      );
      localStorageCorrectLetters.push(letter);
      localStorage.setItem(
        "correct-letters",
        JSON.stringify(localStorageCorrectLetters)
      );
      dispatch({
        type: CORRECT_GUESS,
        letter: letter,
      });
    } else {
      let localStorageWrongLetters = JSON.parse(
        localStorage.getItem("wrong-letters")
      );
      localStorageWrongLetters.push(letter);
      localStorage.setItem(
        "wrong-letters",
        JSON.stringify(localStorageWrongLetters)
      );
      dispatch({
        type: WRONG_GUESS,
        letter: letter,
      });
    }
  };
};

// WIN GAME
export const winGame = () => {
  return {
    type: WIN_GAME,
  };
};

// LOSE GAME
export const loseGame = () => {
  return {
    type: LOSE_GAME,
  };
};
