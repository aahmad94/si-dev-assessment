import React from 'react';
import TasksContainer from './tasks/tasks_container';
import LogoutContainer from '../auth_components/logout_btn';
 
export default () => (
  <div className="home">
    <TasksContainer />
    <LogoutContainer />
  </div>
);