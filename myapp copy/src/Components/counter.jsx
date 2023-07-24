import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 1000
    }
    render() { 
        return (<div><h1>{this.state.count}</h1><button>Insert</button></div>);
    }
}
 
export default Counter;