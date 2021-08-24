import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from '../src/pages/Blog'
import Portfolio from '../src/pages/Portfolio'
import "materialize-css/dist/css/materialize.min.css";
import BlogPost from './pages/BlogPost';

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Blog} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/blogpost/:id' component={BlogPost} />
      </Router>
    )
  }
}

export default App
