import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel';

ReactDOM.render(
  <div>{title}</div>,
  document.querySelector("root")
);

module.hot.accept(); 