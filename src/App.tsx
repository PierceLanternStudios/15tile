import React from "react";
import "./App.css";
import { GameBoard } from "./features/game/game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Router>
      <GameBoard />
    </Router>
  );
}

export default App;
