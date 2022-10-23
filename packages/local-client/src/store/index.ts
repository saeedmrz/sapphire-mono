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
let timer: any;
listenerMiddleware.startListening({
  matcher: isAnyOf(moveCell, updateCell, deleteCell, insertCellAfter),
  effect: async (action, listenerApi) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      listenerApi.dispatch(saveCells());
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
