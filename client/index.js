import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const title = 'My Minimal React Webpack Babel';
  const root = document.getElementById('root');
  
  ReactDOM.render(
    <div>{title}</div>, root
  );
});

// module.hot.accept(); 