import {
  createSlice,
  PayloadAction,
  createSelector,
  nanoid,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "store";
import { Cell, CellTypes } from "./Cell.types";
import axios from "axios";

const createCell = (type: CellTypes): Cell => ({
  content: "",
  type: type,
  id: nanoid(),
});

export interface CellsState {
  loading: boolean;
  error: unknown | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

export const fetchCells = createAsyncThunk("cells/fetchCells", async () => {
  const { data }: { data: Cell[] } = await axios.get("/cells");
  return data;
});

export const saveCells = createAsyncThunk(
  "cells/saveCells",
  async (_, { getState }) => {
    console.log("savecells called");
    const state = getState() as { cells: CellsState };
    const { order, data } = state.cells;
    const cells = order.map((id) => data[id]);
    await axios.post("/cells", { cells });
  }
);

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    saveCellsError: (state, action): any => {
      state.error = action.payload;
    },
    // fetchCells: (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // fetchCellsComplete: (state, action: PayloadAction<Cell[]>) => {
    //   state.order = action.payload.map((cell) => cell.id);
    //   state.data = action.payload.reduce((acc, cell) => {
    //     acc[cell.id] = cell;
    //     return acc;
    //   }, {} as CellsState["data"]);
    // },
    // fetchCellsError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    updateCell: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
    },
    deleteCell: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
      state.order = state.order.filter((id) => id !== action.payload);
    },
    moveCell: (state, action) => {
      const { direction } = action.payload;
      const index = state.order.findIndex((id) => id === action.payload.id);
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
    },

    insertCellAfter: (state, action) => {
      const cell = createCell(action.payload.type);

      state.data[cell.id] = cell;

      const cellIndex = state.order.findIndex((id) => id === action.payload.id);

      if (cellIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(cellIndex + 1, 0, cell.id);
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCells.pending, (state: CellsState) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchCells.fulfilled, (state: CellsState, action) => {
      state.order = action.payload.map((cell) => cell.id);
      state.data = action.payload.reduce((acc, cell) => {
        acc[cell.id] = cell;
        return acc;
      }, {} as CellsState["data"]);
    });

    builder.addCase(fetchCells.rejected, (state: CellsState, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  saveCellsError,
  // fetchCellsComplete,
  // fetchCellsError,
  updateCell,
  deleteCell,
  moveCell,
  insertCellAfter,
} = cellsSlice.actions;

export const getSelectedCells = createSelector(
  (state: RootState) => state.cells,
  (cells) => cells
);

export default cellsSlice.reducer;
