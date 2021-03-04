import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Medium from './pages/Medium.js';
import Large from './pages/Large.js';

class App extends Component {

    render(){
        return (
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/medium" component={Medium}/>
              <Route path="/large" component={Large}/>
            </div>
          </Router>
        );
    }
}

export default App;
