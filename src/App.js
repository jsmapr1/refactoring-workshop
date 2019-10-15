/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import PizzaMaker from './components/PizzaMaker/PizzaMaker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Prepare Your Order
        </header>
        <div className="main">
          <PizzaMaker />
        </div>
      </div>
    );
  }
}

export default App;
