import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing';
import catStore from '../stores/CatStore';

class CatIndex extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentWillMount(){
    catStore.on('load', this.handleChange.bind(this))
    this.setState({
      cats: catStore.getCats()
    })
  }

  handleChange(){
    this.setState({
      cats: catStore.getCats()
    })
  }

  componentWillUpdate(){
    // catStore.on('change', this.handleChange.bind(this))
    this.setState({
      cats: catStore.getCats()
    })
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
    let catsToShow
    if(this.state.cats.length > 0){
      catsToShow = this.renderCats()
    } else {
      catsToShow = <div>waiting...</div>
    }

    return (
      <div>
        <div className="header">
          <Header textLocation="Add a cat!" linkLocation="/cat-add" text="Cats!"/>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {catsToShow}
          </div>
        </div>
      </div>

    )
  }
}

export default CatIndex
