import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CatAdd from './routes/CatAdd';
import CatIndex from './routes/CatIndex';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CatIndex} />
          <Route path='/cat-add' component={CatAdd} />
        </div>
      </Router>
    );
  }
}

export default App;
