import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import bundle from "bundler";
import { RootState } from "store";
import { updateCell } from "./cellsSlice";

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

type BundleAction = {
  cellId: string;
  result: {
    code: string;
    err: string;
  };
};

const initialState: BundlesState = {};

export const createBundle = createAsyncThunk(
  "bundles/createBundle",
  async ({ cellId, input }: { cellId: string; input: string }) => {
    const result = await bundle(input);
    return { cellId, result };
  }
);

export const createBundles = createAsyncThunk(
  "bundles/createBundles",
  async ({ input, cellId }: { input: string; cellId: string }) => {
    const result = await bundle(input);
    return { result, cellId };
  }
);

export const bundlesSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(updateCell, (state, action) => {});

    builder.addCase(createBundles.pending, (state, action) => {
      state[""] = {
        loading: true,
        code: "",
        err: "",
      };
    });

    builder.addCase(createBundles.fulfilled, (state, action) => {
      state[action.payload.cellId] = {
        loading: false,
        code: action.payload.result!.code,
        err: action.payload.result!.err,
      };
    });
  },
});

export const getSelectedBundle = createSelector(
  (state: RootState) => state,
  (state) => state.bundles
);
