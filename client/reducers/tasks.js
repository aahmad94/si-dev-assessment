import { RECEIVE_TASK } from '../actions/task';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task});
    default: 
      return state;
  }
};