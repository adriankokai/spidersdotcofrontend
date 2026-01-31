import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from '../src/pages/Blog'
import Portfolio from '../src/pages/Portfolio'
import "materialize-css/dist/css/materialize.min.css";
import BlogPost from './pages/BlogPost';
import Accounts from './pages/Accounts';

export class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Blog} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/accounts' component={Accounts} />
          <Route exact path='/blogpost/:title' component={BlogPost} />
      </Router>
    )
  }
}

export default App
