import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import bundle from "bundler";
import { RootState } from "store";

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

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
