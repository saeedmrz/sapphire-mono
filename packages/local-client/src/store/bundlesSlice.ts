import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import bundle from "bundler";

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

export const bundlesSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {
    bundleStart: (state, action) => {
      const { cellId } = action.payload;
      state[cellId] = {
        loading: true,
        code: "",
        err: "",
      };
    },
    bundleComplete: (state, action) => {
      const { code, err } = action.payload.bundle;
      state[action.payload.cellId] = {
        loading: false,
        code,
        err,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      createBundle.pending,
      (
        state: BundlesState,
        action: PayloadAction<BundleAction | undefined>
      ) => {
        state[action.payload!.cellId] = {
          loading: true,
          code: "",
          err: "",
        };
      }
    );

    builder.addCase(
      createBundle.fulfilled,
      (
        state: BundlesState,
        action: PayloadAction<BundleAction | undefined>
      ) => {
        state[action.payload!.cellId] = {
          loading: false,
          code: action.payload!.result.code,
          err: action.payload!.result.err,
        };
      }
    );
  },
});

export const { bundleStart, bundleComplete } = bundlesSlice.actions;
