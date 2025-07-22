import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../app/store";

export interface gameState {
  grid: number[][];
  openPos: { row: Number; col: Number };
}

const initialState: gameState = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ],
  openPos: { row: 0, col: 0 },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    moveLeft: (state) => {
      // no-op if empty spot is on right col:
      if (state.openPos.col === state.grid[0].length - 1) {
        console.log("NO-OP!");
        return state;
      }
      // otherwise, flip empty tile and tile in reverse direction:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      return {
        ...state,
        grid: gridRecalculate(state.grid, row, col, 0, 1),
        openPos: { row: row, col: col + 1 },
      };
    },

    moveRight: (state) => {
      // no-op if empty spot is on left col:
      if (state.openPos.col === 0) {
        console.log("NO-OP!");
        return state;
      }

      // otherwise, flip empty tile and tile in reverse direction:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      return {
        ...state,
        grid: gridRecalculate(state.grid, row, col, 0, -1),
        openPos: { row: row, col: col - 1 },
      };
    },

    moveUp: (state) => {
      // no-op if empty spot is on bottom row:
      if (state.openPos.row === state.grid.length - 1) return state;

      // otherwise, flip empty tile and tile in reverse direction:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      return {
        ...state,
        grid: gridRecalculate(state.grid, row, col, 1, 0),
        openPos: { row: row + 1, col: col },
      };
    },

    moveDown: (state) => {
      // no-op if empty spot is on right col:
      if (state.openPos.row === 0) {
        console.log("NO-OP!");
        return state;
      }

      // otherwise, flip empty tile and tile in reverse direction:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      return {
        ...state,
        grid: gridRecalculate(state.grid, row, col, -1, 0),
        openPos: { row: row - 1, col },
      };
    },
  },
});

//selectors
export const selectGrid = (state: RootState) => state.game.grid;
export const selectOpenPos = (state: RootState) => state.game.openPos;

//action generators
export const { moveDown, moveLeft, moveRight, moveUp } = gameSlice.actions;

//primary reducer
export default gameSlice.reducer;

/**
 * gridRecalculate
 *
 * Takes the current state grid and a swap operation (encoded with
 * row/col offsets) and returns a new array to use as the new grid.
 * Does so in an immutable way to preserve state.
 *
 * @param grid        A reference to the state grid array to create
 *                    a new version of.
 * @param openRow     The row index containing the empty tile.
 * @param openCol     The column index containing the empty tile.
 * @param rowOffset   The row offset of the swapping tile from the
 *                    open tile.
 * @param colOffset   The column offset of the swapping tile from the
 *                    open tile.
 */
function gridRecalculate(
  grid: number[][],
  openRow: number,
  openCol: number,
  rowOffset: number,
  colOffset: number
) {
  console.log(
    grid.map((row, rowIdx) => {
      return row.map((elem, colIdx) => {
        if (rowIdx === openRow + rowOffset && colIdx === openCol + colOffset) {
          return 0;
        }
        if (rowIdx === openRow && colIdx === openCol) {
          return grid[rowIdx + rowOffset][colIdx + colOffset];
        }
        return grid[rowIdx][colIdx];
      });
    })
  );
  return grid.map((row, rowIdx) => {
    return row.map((elem, colIdx) => {
      if (rowIdx === openRow + rowOffset && colIdx === openCol + colOffset) {
        return 0;
      }
      if (rowIdx === openRow && colIdx === openCol) {
        return grid[rowIdx + rowOffset][colIdx + colOffset];
      }
      return grid[rowIdx][colIdx];
    });
  });
}
