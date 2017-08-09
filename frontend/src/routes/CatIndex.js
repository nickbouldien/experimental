import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing';
import catStore from '../stores/CatStore';
import {Link} from 'react-router-dom'

class CatIndex extends Component{
  constructor(props){
    super(props)
    // this.state = {
    //   cats: []
    // }
  }

  componentWillMount(){
    // catStore.on('load', this.handleChange.bind(this))
    // this.setState({
    //   cats: catStore.getCats()
    // })
  }

  handleChange(){
    // this.setState({
    //   cats: catStore.getCats()
    // })
  }

  // renderCats(){
  //   let list = this.state.cats.map(function(cat, i) {
  //     return (
  //       <CatListing key={cat.id} catInfo={cat}/>
  //       )
  //   })
  //   return list;
  // }

  render(){
    // let catsToShow
    // if(this.state.cats.length > 1){
    //   catsToShow = this.renderCats()
    // } else {
    //   catsToShow = <div>waiting...</div>
    // }

    return (
      <div>
        <div className="header">
          {/* <Header textLocation="Add a cat!" linkLocation="/cat-add" text="Cats!"/> */}
          <Link to="/">Home</Link>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>stuff goes here</p>
            <div>Upload CSV file here:</div>

          </div>
        </div>
      </div>

    )
  }
}

export default CatIndex
