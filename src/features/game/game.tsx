import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectGrid } from "./gameSlice";
import styles from "./game.module.css";

export function GameBoard() {
  const dispatch = useAppDispatch();
  const grid = useAppSelector(selectGrid);

  return (
    <div className={styles.grid}>
      {grid.map((row) => (
        <div className={styles.row}>
          {row.map((cell) =>
            cell === 0 ? (
              <div className={styles.emptyCell}></div>
            ) : (
              <div className={styles.cell}>{cell}</div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
