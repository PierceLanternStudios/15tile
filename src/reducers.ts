import { createSlice } from "@reduxjs/toolkit";

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

export const { increment } = gameSlice.actions;

export default gameSlice.reducer;
