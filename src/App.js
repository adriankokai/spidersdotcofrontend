import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LinksInBio from './pages/LinksInBio.js';
import Tutorial from './pages/Tutorial';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/linksinbio' component={LinksInBio} />
          <Route exact path='/tutorial/:id' component={Tutorial} />
        </div>
      </Router>
    )
  }
}

export default App
