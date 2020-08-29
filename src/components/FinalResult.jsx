import React from "react";

// CSS
import "../css/finalResult.css";

function FinalResult({ result }) {
  return (
    <div
      className={
        result === "win"
          ? "final-result-wrapper win-result"
          : "final-result-wrapper lose-result"
      }
    >
      <p className="final-result-text">
        {result === "win"
          ? `Congratulations! You saved your friend :)`
          : "You let your friend die! Your a bad friend :("}
      </p>
    </div>
  );
}

export default FinalResult;
