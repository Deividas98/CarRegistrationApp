import React, { Component } from 'react';
//import React from 'react';
import './App.css';
//import Recordform from './components/Recordform.js';
import Record from './components/Record.js';
import image from "./logo.PNG";


export default class App extends /*React.*/Component {

  constructor() {
    super();
    this.state = {
      //recordai: datafile.records
      records: [],
      plates: "",
      fullname: ""

    }
  }

  render /*App*/() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={image} className="photo" alt="logo" />
          <div>
            <div>
              {/*<Recordform />*/}
            </div>
            <div>
              <Record />
            </div>
          </div>
        </header>
        <p>Note: Personalised registration plates are not included</p>
      </div>
    );
  }

  //export default App;
}
