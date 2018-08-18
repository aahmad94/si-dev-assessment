import axios from 'axios';

export const postUser = (user) => (
  axios.post('/api/users', {
    user: user
  })
);


export const postSession = (user) => (
  axios.post('/api/session', {
    user: user
  })
);

export const deleteSession = () => (
  axios.delete('/api/session')
);
