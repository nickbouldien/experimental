
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Header extends Component{
  render(){
    return (
    <div className="row">
      <div className="col-xs-12">
        <Link to={this.props.linkLocation}>{this.props.textLocation}</Link>
        <h1>{this.props.text}</h1>
      </div>
    </div>
  )
  }
}


export default Header
