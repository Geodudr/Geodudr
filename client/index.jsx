import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root);
root.render(
  <div>
    <h1>Working</h1>
    <p>THIS IS WORKING!</p>
    <App />
  </div>
);