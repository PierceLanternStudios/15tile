import { useEffect, useState } from "react";

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
  }, []);
  return (
    <div>
      <div className={styles.grid}>
        {grid.map((row, rowIdx) => (
          <div
            className={styles.row}
            style={{
              position: "absolute",
              top: rowIdx * 50 + 50,
              transition: "transform 0.3s ease",
            }}
          >
            {row.map((cell, colIdx) =>
              cell === 0 ? (
                <div
                  className={styles.emptyCell}
                  style={{
                    position: "absolute",
                    left: colIdx * 50 + 50,
                    transition: "transform 0.3s ease",
                  }}
                ></div>
              ) : (
                <div
                  className={styles.cell}
                  style={{
                    position: "absolute",
                    left: colIdx * 50 + 50,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {cell}
                </div>
              )
            )}
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
