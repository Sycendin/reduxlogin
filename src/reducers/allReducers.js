import { combineReducers } from "redux";
import { counterReducerP1 } from "./counter";
import { routeSelect } from "./route";

const allReducers = combineReducers({
  counterP1: counterReducerP1,
  routeSelect: routeSelect,
});
export default allReducers;
