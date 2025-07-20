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
      if (state.openPos.col === state.grid[0].length - 1) return;

      // otherwise flip flop:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      state.grid[row][col] = state.grid[row][col + 1];
      state.grid[row][col + 1] = 0;
      state.openPos.col = col + 1;
      return;
    },

    moveRight: (state) => {
      // no-op if empty spot is on left col:
      if (state.openPos.col === 0) return;

      // otherwise flip flop:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      state.grid[row][col] = state.grid[row][col - 1];
      state.grid[row][col - 1] = 0;
      state.openPos.col = col - 1;
      return;
    },

    moveUp: (state) => {
      // no-op if empty spot is on bottom row:
      if (state.openPos.row === state.grid.length - 1) return;

      // otherwise flip flop:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      state.grid[row][col] = state.grid[row + 1][col];
      state.grid[row + 1][col] = 0;
      state.openPos.row = row + 1;
      return;
    },

    moveDown: (state) => {
      // no-op if empty spot is on right col:
      if (state.openPos.row === 0) return;

      // otherwise flip flop:
      const row = Number(state.openPos.row);
      const col = Number(state.openPos.col);
      state.grid[row][col] = state.grid[row - 1][col];
      state.grid[row - 1][col] = 0;
      state.openPos.col = col - 1;
      return;
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
