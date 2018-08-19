import axios from 'axios';

export const postTask = (task) => (
  axios.post("/api/tasks", {
    task: task
  })
);