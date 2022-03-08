import { combineReducers } from "redux";
import { counterReducerP1 } from "./counter";
import { routeSelect } from "./route";
import { user } from "./user";

const allReducers = combineReducers({
  counterP1: counterReducerP1,
  routeSelect: routeSelect,
  user: user,
});
export default allReducers;
