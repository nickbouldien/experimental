import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Header from '../components/Header'
import userStore from '../stores/UserStore';
import {Link} from 'react-router-dom'

class UserCreated extends Component{

  renderNewUser(){
    console.log("in render new user", userStore.newUser)
    let attributes = userStore.getNewUser()
    console.log(attributes)
    return (
      <div>
        <h1>User Created:</h1>
        <p>First Name: {attributes.firstname}</p>
        <p>Last Name: {attributes.lastname}</p>
        <p>City: {attributes.city}</p>
        <p>State: {attributes.state}</p>
        <p>Email: {attributes.password}</p>
        <Link to="/">Continue</Link>
      </div>
    )
  }

  render(){
    let newUser = this.renderNewUser()
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            {newUser}
          </div>
        </div>
      </div>

    )
  }
}

export default UserCreated
