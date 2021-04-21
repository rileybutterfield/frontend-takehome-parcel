import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './base.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
