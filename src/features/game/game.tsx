import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectGrid } from "./gameSlice";
import styles from "./game.module.css";

export function Counter() {
  const dispatch = useAppDispatch();
  const grid = useAppSelector(selectGrid);

  return (
    <div className={styles.grid}>
      {grid.map((row) => (
        <div className={styles.row}>
          {row.map((cell) => (
            <div className={styles.cell}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
