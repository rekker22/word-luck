import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <Router>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/register"><Register /></Route>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
