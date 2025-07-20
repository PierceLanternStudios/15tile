import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../app/store";

export interface gameState {
  grid: number[][];
}

const initialState: gameState = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

//selectors
export const selectGrid = (state: RootState) => state.game.grid;

//action generators
export const {} = gameSlice.actions;

//primary reducer
export default gameSlice.reducer;
