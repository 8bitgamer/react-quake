import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Map from './Map.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <Map />
      </div>
    );
  }
}




export default App;
