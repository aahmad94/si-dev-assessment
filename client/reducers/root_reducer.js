import {
  combineReducers
} from 'redux';
import session from "./ui/session";

export default combineReducers({
  sessionReducer: session
});