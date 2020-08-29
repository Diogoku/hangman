import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { guess } from "../../actions/hangmanActionCreators";

export default function ChooseLetter() {
  const dispatch = useDispatch();
  const { correctLetters, wrongLetters, gameState } = useSelector(
    (state) => state.HangmanReducer
  );
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(guess(data.letter));
  };

  useEffect(() => {
    let select = document.getElementById("select-letter");
    let button = document.getElementById("choose-letter-submit");
    if (gameState === "win" || gameState === "lose") {
      select.disabled = true;
      button.disabled = true;
    } else {
      select.disabled = false;
      button.disabled = false;
    }
  }, [gameState]);

  useEffect(() => {
    correctLetters.forEach((letter) => {
      let select = document.getElementById("select-letter");
      for (let i = 0; i < select.length; i++) {
        if (select.options[i].value == letter) select.remove(i);
      }
    });
    wrongLetters.forEach((letter) => {
      let select = document.getElementById("select-letter");
      for (let i = 0; i < select.length; i++) {
        if (select.options[i].value == letter) select.remove(i);
      }
    });
  }, [correctLetters, wrongLetters]);

  return (
    <div className="choose-letter-wrapper">
      <h2>Choose Letter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select id="select-letter" name="letter" ref={register}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
          <option value="I">I</option>
          <option value="J">J</option>
          <option value="K">K</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="N">N</option>
          <option value="O">O</option>
          <option value="P">P</option>
          <option value="Q">Q</option>
          <option value="R">R</option>
          <option value="S">S</option>
          <option value="T">T</option>
          <option value="U">U</option>
          <option value="V">V</option>
          <option value="W">W</option>
          <option value="X">X</option>
          <option value="Y">Y</option>
          <option value="Z">Z</option>
        </select>
        <input
          type="submit"
          value="Choose Letter"
          className="input"
          id="choose-letter-submit"
        />
      </form>
    </div>
  );
}
