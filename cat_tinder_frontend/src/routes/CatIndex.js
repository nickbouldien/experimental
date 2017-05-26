import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing';
import {fetchCats} from '../actions/CatActions';
import catStore from '../stores/CatStore';

class CatIndex extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
    fetchCats()
  }

  handleChange(){
    this.setState({
      cats: catStore.getCats()
    })
  }

  componentWillMount(){
    catStore.on('change', this.handleChange.bind(this))
  }

  renderCats(){
    let list = this.state.cats.map(function(cat, i) {
      return (
        <CatListing key={cat.id} catInfo={cat}/>
        )
    })
    return list;
  }

  render(){
    return (
      <div>
        <div className="header">
          <Header textLocation="Add a cat!" linkLocation="/cat-add" text="Cats!"/>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.renderCats()}
          </div>
        </div>
      </div>

    )
  }
}

export default CatIndex
