import {
  configureStore,
  createListenerMiddleware,
  getDefaultMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { bundlesSlice } from "./bundlesSlice";
import {
  cellsSlice,
  saveCells,
  moveCell,
  updateCell,
  deleteCell,
  insertCellAfter,
} from "./cellsSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(moveCell, updateCell, deleteCell, insertCellAfter),
  effect: async (action, listenerAi) => {
    let timer: any;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      listenerAi.dispatch(saveCells());
    }, 250);
  },
});

export const store = configureStore({
  reducer: {
    cells: cellsSlice.reducer,
    bundles: bundlesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
