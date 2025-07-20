import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../app/store";

const initialState = { value: 0 };

export interface gameState {
  tilePositions: number[][];
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

//selectors
export const selectValue = (state: RootState) => state.game.value;

//action generators
export const { increment } = gameSlice.actions;

//primary reducer
export default gameSlice.reducer;
