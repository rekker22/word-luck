import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Navbar from './containers/Navbar/Navbar';
import Referral from './containers/Referral/Referral';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ParticleEffect from './components/ParticleEffect/ParticleEffect';

ReactDOM.render(
  <div>
    {/*<Navbar />*/}
    <ParticleEffect />
    <Router>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/register"><Register /></Route>
      <Route exact path="/referral"><Referral /></Route>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
