import React, { Component } from 'react';
import './App.css';

import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
