import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { moveUp, moveDown, moveLeft, moveRight, selectGrid } from "./gameSlice";
import styles from "./game.module.css";

export function GameBoard() {
  const dispatch = useAppDispatch();
  const grid = useAppSelector(selectGrid);

  //key bindings:
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "w") {
        dispatch(moveUp());
      } else if (event.key === "s") {
        dispatch(moveDown());
      } else if (event.key === "a") {
        dispatch(moveLeft());
      } else if (event.key === "d") {
        dispatch(moveRight());
      }
    };

    //initiate event listener:
    document.addEventListener("keypress", handleKeyDown);

    // remove listener when done:
    return () => {
      document.removeEventListener("keypress", handleKeyDown);
    };
  }, [dispatch]);

  // generate flat list of cells for animation + rendering:
  const flatCells = grid.flatMap((row, rowIdx) =>
    row.map((cell, colIdx) => ({ val: cell, row: rowIdx, col: colIdx }))
  );

  flatCells.sort((a, b) => a.val - b.val);

  // render the grid:
  return (
    <div>
      <div className={styles.grid}>
        {flatCells.map((cell) => (
          <div
            key={cell.val}
            className={cell.val === 0 ? styles.emptyCell : styles.cell}
            style={{
              position: "absolute",
              transform: `translate(${cell.col * 50 + 50}px, ${
                cell.row * 50 + 50
              }px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {cell.val === 0 ? "" : cell.val}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(moveUp())}>Up</button>
      <button onClick={() => dispatch(moveDown())}>Down</button>
      <button onClick={() => dispatch(moveLeft())}>Left</button>
      <button onClick={() => dispatch(moveRight())}>Right</button>
    </div>
  );
}
