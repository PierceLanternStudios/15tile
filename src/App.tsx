import "./App.css";
import { useAppSelector } from "./app/hooks";
import { GameBoard } from "./features/game/gameBoard";
import { BrowserRouter as Router } from "react-router-dom";
import { INITAL_GRID, selectGrid } from "./features/game/gameSlice";

function App() {
  const grid = useAppSelector(selectGrid);

  return (
    <Router>
      <GameBoard />
      {JSON.stringify(grid) === JSON.stringify(INITAL_GRID) ? "Game won!" : ""}
    </Router>
  );
}

export default App;
