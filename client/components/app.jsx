import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';
import SigninContainer from './auth_components/signin_container';
import SignupContainer from './auth_components/signup_container';

const App = () => (
  <div className="app">
    <AuthRoute path="/signin" component={SigninContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;
