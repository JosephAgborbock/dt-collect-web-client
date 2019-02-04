import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './../components/Header';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/header" component={Header} />
          
        </div>
      </Router>
    );
  }
}

export default App;
