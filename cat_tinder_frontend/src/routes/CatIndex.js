import React, { Component } from 'react'

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
        //console.log(response);
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

  render(){
    console.log(this.state.cats);
    let list = this.state.cats.map(function(cat) {
      console.log(cat);
      return (
        <div key={'z' + cat.id}>
          <ul key={cat.id}>
            <li key={'a'+cat.id}>{cat.color}</li>
            <li key={'b'+cat.id}>{cat.habitat}</li>
            <li key={'c'+cat.id}>{cat.gender}</li>
            <li key={'d'+cat.id}>{cat.age}</li>
          </ul>
      </div>
    )
    })
    console.log(list);

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default CatIndex