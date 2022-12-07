import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root);
root.render(
  <Router>
    <App />
  </Router>
);