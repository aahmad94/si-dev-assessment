import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';
import SigninContainer from './auth_components/signin_container';
import SignupContainer from './auth_components/signup_container';
// import TasksContainer from '../components/protected_components/tasks/tasks_container';
import Home from './protected_components/home';

const App = () => (
  <div className="app">
    <AuthRoute path="/signin" component={SigninContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute exact path="/" component={Home} />
  </div>
);

export default App;
