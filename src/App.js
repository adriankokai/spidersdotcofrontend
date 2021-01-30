import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LinksInBio from './pages/LinksInBio.js';
import Header from './components/Header';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Route exact path='/linksinbio' component={LinksInBio} />
        </div>
      </Router>
    )
  }
}

export default App
