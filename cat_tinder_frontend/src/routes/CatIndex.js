import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing'

class CatIndex extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentWillMount(){
    let success
    const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        }
    fetch('http://localhost:4000/cats', params)
      .then((response)=>{
        success = response.ok
        return response.json()
      })
      .then((body)=>{
        if (success){
          console.log("success!", body)
          let cats = body.cats
          this.setState({cats: cats})
        }
        else {
          console.log("failure!", body)
        }
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
