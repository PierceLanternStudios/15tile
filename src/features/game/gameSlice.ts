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
  reducers: {},
});

//selectors
export const selectGrid = (state: RootState) => state.game.grid;
export const selectOpenPos = (state: RootState) => state.game.openPos;

//action generators
export const {} = gameSlice.actions;

//primary reducer
export default gameSlice.reducer;
