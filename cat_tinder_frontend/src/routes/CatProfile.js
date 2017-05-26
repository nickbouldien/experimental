import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing'

class CatProfile extends Component{
  render(){
    console.log(this.props)
    return <CatListing catInfo={this.props.stuff.info}/>
  }
}

export default CatProfile
