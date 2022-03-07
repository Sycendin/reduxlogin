import { combineReducers } from "redux";
import { counterReducerP1 } from "./counter";

const allReducers = combineReducers({
  counterP1: counterReducerP1,
});
export default allReducers;
