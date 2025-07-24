import "./App.css";
import { GameBoard } from "./features/game/game";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GameBoard />
    </Router>
  );
}

export default App;
