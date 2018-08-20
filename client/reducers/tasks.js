import { RECEIVE_TASK, RECEIVE_TASKS } from '../actions/task';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK:
      console.log("HELLO WORLD");
      const newState = merge([], state);
      newState.push(action.task.data);
      return newState;
    case RECEIVE_TASKS:
      return merge([], action.tasks.data.tasks);
    default: 
      return state;
  }
};