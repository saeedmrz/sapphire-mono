import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import bundlesReducer from "./bundlesReducer";

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

// extra steps in order to apply some types to the useSelector hook
// from React Redux we have to define a new type at the bottom of
// This file called RootState. this defines or describes the overall
// structure of the state object inside redux store (applying types to
// react redux)

export type RootState = ReturnType<typeof reducers>;
