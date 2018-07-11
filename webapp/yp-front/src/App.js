import React, { Component } from 'react';
import './App.css';
import {Hello} from './components/Hello';
import {Home} from './components/Home.js';
import {Header} from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {

    const MyHelloPage = (props) => {
      return (
        <Hello message="My Friend"/>
      )
    }

    return (
      <Router>
        <div>
          <Header/>
          <main role="main" className="container App-content">
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/hello" render={MyHelloPage}/>
            </div>
          </main>
          <footer className="footer">
              <div className="container">
                <span className="text-muted">
                  @GU_Yuanhao 2018
                </span>
              </div>
          </footer>
        </div>
      </Router>

      
      /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Yuanhao's awesome playground</h1>
        </header>
        <Hello className="App-intro" message="My friend" /> */
    );
  }
}

export default App;
