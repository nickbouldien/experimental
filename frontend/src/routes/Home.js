import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import Header from '../components/Header'
import CatListing from '../components/CatListing';
import catStore from '../stores/CatStore';
import {Link} from 'react-router-dom'

import FileInput from 'react-file-input';
import Papa from 'papaparse';


class Home extends Component{
  constructor(props){
    super(props)
    // this.state = {
    //   cats: []
    // }
    this.handleChange = this.handleChange.bind(this);
    this.createEmails = this.createEmails.bind(this);
  }

  componentWillMount(){
    // catStore.on('load', this.handleChange.bind(this))
    // this.setState({
    //   cats: catStore.getCats()
    // })
  }

  handleChange(evt){
    const file = evt.target.files[0];
    console.log('Selected file:', file);
    Papa.parse(file, {
    	delimiter: ",",	// auto-detect
    	newline: "",	// auto-detect
    	quoteChar: '"',
    	header: true,
    	complete:(results, file) => {
      	// console.log("Parsing complete:", results, file);
        // console.log('this is', this);
        this.createEmails(results, file);
        // console.log('results.data', results.data);
      },
    	error: undefined,
    	download: false,
    	skipEmptyLines: false,
    	chunk: undefined
    });
  }

  createEmails(results, file) {
    // get from state, props, context, window...
    const domain = "http://nickco";
    const l = "12343-kasd12-1234k-kasd21s-as23ls2";
    const t = "default_template";
    const a = "medium1234";

    let data = results.data;
    // console.log('datadata', data);
     // data.forEach(results.firstname+results.lastname+".com")
     for(let [index, person] of data.entries()) {
      //  console.log('stuffhere', person);
      //  const emailString = `${person.firstname}@${person.lastname}.com`;

      // need to encode
       const link = `${person.firstname}@${person.lastname}.comnickkk`;
       data[index].url = link;
     }

    console.log('newdata', data);

    const csv = Papa.unparse(data, {
    	quotes: false,
    	quoteChar: '"',
    	delimiter: ",",
    	header: true,
    	newline: "\r\n",
      complete: function(data, file) {
	       console.log("unparsing complete:", results, file);
      }
    });

    console.log('csv', csv);
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
            <form>
              <FileInput name="myImage"
                         accept=".csv"
                         placeholder="Upload CSV file"
                         className="inputClass"
                         onChange={this.handleChange} />
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
