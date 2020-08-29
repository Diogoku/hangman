import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

function Letters() {
  const { secret, correctLetters } = useSelector(
    (state) => state.HangmanReducer
  );

  return (
    <Fragment>
      <div className="list-letters-wrapper">
        {typeof secret == "object"
          ? secret.map((secretLetter, index) => {
              if (secretLetter === " ") console.log("ola");
              return (
                <div
                  key={index}
                  className={
                    secretLetter === " "
                      ? "space-white-space"
                      : "letter-white-space"
                  }
                >
                  {correctLetters.includes(secretLetter) ? (
                    <h2 className="correct-letter">{secretLetter}</h2>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </Fragment>
  );
}

export default Letters;
