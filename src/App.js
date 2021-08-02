import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from '../src/pages/Blog'
import Portfolio from '../src/pages/Portfolio'
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Blog} />
          <Route exact path='/portfolio' component={Portfolio} />
      </Router>
    )
  }
}

export default App
