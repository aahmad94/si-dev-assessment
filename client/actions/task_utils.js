import axios from 'axios';

export const postTask = (task) => (
  axios.post("/api/tasks", {
    task: task
  })
);

export const getTasks = (tasks) => (
  axios.get("/api/tasks")
);