import { postTask } from './task_utils';

export const RECEIVE_TASK = "RECEIVE_TASK";

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task: task
});

export const createTask = (formTask) => dispatch => postTask(formTask)
  .then(task => dispatch(receiveTask(task)));