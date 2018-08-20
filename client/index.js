import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createTask, fetchTasks } from './actions/task';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');

  window.store = store;
  window.createTask = createTask;
  window.fetchTasks = fetchTasks;
  ReactDOM.render(
    <Root store={store} />, root
  );
});