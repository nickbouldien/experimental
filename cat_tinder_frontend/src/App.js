import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CatAdd from './routes/CatAdd';
import CatProfile from './routes/CatProfile';
import CatIndex from './routes/CatIndex';
import './App.css';
import {fetchCats} from './actions/CatActions';


class App extends Component {
  constructor(props){
    super(props)
    fetchCats()
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={CatIndex} />
          <Route path='/cat-add' component={CatAdd} />
          <Route path='/profile' component={CatProfile}  />
        </div>
      </Router>
    );
  }
}

export default App;
