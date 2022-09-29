import { produce } from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

// First we define an interface that describes the structure of state
// that we return from this reducer - we initialize the state object -
// and define reducer and export it.

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

const reducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        const { cellId } = action.payload;
        state[cellId] = {
          loading: true,
          code: "",
          err: "",
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        const { code, err } = action.payload.bundle;
        state[action.payload.cellId] = {
          loading: false,
          code,
          err,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
