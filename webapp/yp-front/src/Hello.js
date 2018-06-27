import React, { Component } from 'react';

export class Hello extends Component {
    constructor(){
        super();
        this.state = {
            message: "hello again my friend (from state)!"
        };
    }

    render() {
      return (
        <div>
            <p>hello world! {this.props.message}!</p>
            <p>{this.state.message}</p>
        </div>
      );
    }
  }
  