import {
  combineReducers
} from 'redux';
import sessionReducer from './session';
import entitiesReducers from './entities_reducer';

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducers
});