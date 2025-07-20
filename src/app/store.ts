import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";

export const store = configureStore({ reducer: { game: gameReducer } });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
