import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createTask, fetchTasks } from './actions/task';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const renderDOM = (store) => {
    const root = document.getElementById('root');
    ReactDOM.render( <
      Root store = {
        store
      }
      />, root
    );
  };

  let store;
  axios.get("/api/register_token")
    .then(resp => {
      const currentUser = resp.data;
      if (currentUser.id) {
        renderDOM(configureStore({
          session: {
            currentUser: currentUser
          }
        }));
      } else {
        // if no current user
        renderDOM(configureStore({}));
      }
    }, () => {
      // if api req fails
      renderDOM(configureStore({}));
    });
});