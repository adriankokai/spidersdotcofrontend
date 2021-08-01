import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from '../src/pages/Blog'
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Blog} />
      </Router>
    )
  }
}

export default App
