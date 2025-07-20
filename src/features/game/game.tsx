import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectGrid, selectOpenPos } from "./gameSlice";
import styles from "./game.module.css";

export function Counter() {
  const dispatch = useAppDispatch();
  const grid = useAppSelector(selectGrid);
  const openPos = useAppSelector(selectOpenPos);

  return (
    <div className={styles.grid}>
      {grid.map((row, rowIdx) => (
        <div className={styles.row}>
          {row.map((cell, colIdx) =>
            rowIdx === openPos.row && colIdx === openPos.col ? (
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
