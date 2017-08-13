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
        console.log('this is', results);
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
    const domain = window.location.href; //"http://nickco.org/";
    // let them select
    const a = "medium1234";
    const t = "default_template";
    const l = "12343-kasd12-1234k-kasd21s-as23ls2";

    // console.log('fileinfo', file);
    const fileName = file.name;

    let data = results.data;
    console.log('in createEmails');
     for(let [index, person] of data.entries()) {
      //  console.log('stuffhere', person);
      //  const emailString = `${person.firstname}@${person.lastname}.com`;
      const em = person.email;
      const fn = person.firstname;
      const ln = person.lastname;

      // need to URI encode
       const link = `${domain}?a=${a}&t=${t}&l=${l}&em=${em}&fn=${fn}&ln=${ln}`;
       data[index].url = link;
     }

    const csv = Papa.unparse(data, {
    	quotes: false,
    	quoteChar: '"',
    	delimiter: ",",
    	header: true,
    	newline: "\r\n",
      // complete:(data, csv) => {
	    //    console.log("unparsing complete:", data, csv);
      //    this._downloadCSV(csv);
      // }
    });
    if (csv) {
      console.log('csv', csv);
      this._downloadCSV(csv, fileName);
    }
  }


  _downloadCSV(csv, fileName) {
    // console.log('incoming csv: ', csv);
    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var csvURL =  null;
    if (navigator.msSaveBlob) {
        csvURL = navigator.msSaveBlob(csvData, `${fileName}+links`);
    } else {
        csvURL = window.URL.createObjectURL(csvData);
    }
    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', `${fileName}+links.csv`);
    tempLink.click();
  }



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
