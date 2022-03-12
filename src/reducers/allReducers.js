import { combineReducers } from "redux";
import { counterReducerP1 } from "./counter";
import { routeSelect } from "./route";
import { user, signedIn } from "./user";
import { toggleModal } from "./modaltoggle";
import {
  toggleHidden,
  messageCode,
  messageRecieved,
  toggleHiddenGet,
} from "./message";

const allReducers = combineReducers({
  counterP1: counterReducerP1,
  routeSelect: routeSelect,
  user: user,
  signedIn: signedIn,
  toggleModal: toggleModal,
  toggleHidden: toggleHidden,
  messageCode: messageCode,
  messageRecieved: messageRecieved,
  toggleHiddenGet: toggleHiddenGet,
});
export default allReducers;
