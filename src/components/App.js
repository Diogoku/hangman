import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENT
import Game from "./Game";

// CSS
import "../css/default.css";

// FONT AWESOME ICONS
import "./FontAwesomeIcons/index";

function App() {
  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <h2 className="game-title">HANGMAN</h2>
        <Game />
      </div>
    </Provider>
  );
}

export default App;
