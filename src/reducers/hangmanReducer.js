import {
  CREATE_SECRET,
  GET_STATE,
  ATTEMPT,
  CORRECT_GUESS,
  WRONG_GUESS,
  WIN_GAME,
  LOSE_GAME,
  PLAY_AGAIN,
  CREATE_STATE,
} from "../actions/types";

const initialState = {
  secret: [],
  hint: null,
  attempts: 0,
  correctLetters: [],
  wrongLetters: [],
  gameState: "create secret",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SECRET:
      return {
        ...state,
        secret: action.secret,
        hint: action.hint,
        attempts: 0,
        correctLetters: [],
        wrongLetters: [],
        gameState: "playing",
      };
    case GET_STATE:
      return {
        ...state,
        secret: action.secret,
        hint: action.hint,
        attempts: action.attempts,
        correctLetters: action.correctLetters,
        wrongLetters: action.wrongLetters,
        gameState: action.gameState,
      };
    case ATTEMPT:
      return { ...state, attempts: state.attempts + 1 };
    case CORRECT_GUESS:
      return {
        ...state,
        correctLetters: [...state.correctLetters, action.letter],
      };
    case WRONG_GUESS:
      return { ...state, wrongLetters: [...state.wrongLetters, action.letter] };
    case WIN_GAME:
      return { ...state, gameState: "win" };
    case LOSE_GAME:
      return { ...state, gameState: "lose" };
    case PLAY_AGAIN:
      return {
        ...state,
        secret: [],
        hint: null,
        attempts: 0,
        correctLetters: [],
        wrongLetters: [],
        gameState: "create secret",
      };
    case CREATE_STATE:
    default:
      return state;
  }
};
