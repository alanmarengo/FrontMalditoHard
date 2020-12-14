import React, { Component } from 'react';

class Test extends Component {
    env = process.env.REACT_APP_TEST;
    constructor(){
        super();
        
    }
    render() {
        return <h1>Hello enviroment, {this.env}</h1>;
      }
    }

export default Test;