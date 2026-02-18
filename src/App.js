import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from '../src/pages/Blog'
import Portfolio from '../src/pages/Portfolio'
import "materialize-css/dist/css/materialize.min.css";
import BlogPost from './pages/BlogPost';
import Accounts from './pages/Accounts';

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Blog />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/accounts' element={<Accounts />} />
          <Route exact path='/blogpost/:title' element={<BlogPost />} />
        </Routes>
      </Router>
    )
  }
}

export default App
