import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from './Hello';
import {Header} from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Yuanhao's awesome playground</h1>
        </header>
        <Hello className="App-intro" message="My friend" /> */}
        
      </div>
    );
  }
}

export default App;
