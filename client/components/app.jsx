import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';
import { SigninContainer } from './auth_components/signin_container';


const App = () => (
  <div className="app">
    <Route path="/" component={SigninContainer} />
  </div>
);

export default App;
