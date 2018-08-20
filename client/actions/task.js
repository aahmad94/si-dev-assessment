import { postTask, getTasks } from './task_utils';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task: task
});

export const receiveTasks = (tasks) => ({
  type: RECEIVE_TASKS,
  tasks: tasks
});

export const createTask = (formTask) => dispatch => postTask(formTask)
  .then(task => dispatch(receiveTask(task)));

export const fetchTasks = () => dispatch => getTasks()
  .then(tasks => dispatch(receiveTasks(tasks)));