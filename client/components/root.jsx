import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

export default ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div className="app">
        <div>Task Buddy</div>
        <div>Remember the little things</div>    
      </div>
    </HashRouter>
  </Provider>
);