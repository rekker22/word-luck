import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {Register} from './Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/register">
          <Register />
        </Route> 
      </div>
    </Router>
  );
}

export default App;
