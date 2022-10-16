import { configureStore } from "@reduxjs/toolkit";
import { bundlesSlice } from "./bundlesSlice";
import { cellsSlice } from "./cellsSlice";

export const store = configureStore({
  reducer: {
    cells: cellsSlice.reducer,
    bundles: bundlesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
