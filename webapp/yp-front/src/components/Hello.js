import React, { Component } from 'react';

export class Hello extends Component {
    constructor(){
        super();
        this.state = {
            message: "hello again my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    updateMessage(){
        this.setState({
            message:"my friend (from change state)"
        });
    }

    forceUpdateHandler() {
        this.forceUpdate();
     };

    render() {
      return (
        <div>
            <h1>Yuanhao's Greeting</h1>
            <p>hello world! {this.props.message}!</p>
            <p>{this.state.message}</p>
            <button onClick={this.updateMessage}>Click to change</button>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
        </div>
      );
    }
  }
  