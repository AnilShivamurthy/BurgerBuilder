import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Counter.css';
import Progressbar from './Progressbar';

class Counter extends React.Component{
    constructor(){
        super()
        this.state ={
            count : 0 ,
            showcounter: false
        };
    }

    increment=()=>{
        this.setState({
            count: this.state.count + 10,
            showcounter : true
        });
    };

    decrement=()=>{
        this.setState({
            count: this.state.count - 10,
            showcounter : false
        });
    };

    render(){
        return(
            <div>
                <h1>This is a progress bar</h1>
                <div style={{width:this.state.count, background:"red"}}>{this.state.count}</div>
                <button onClick={this.increment} className="button">+</button>
                <button onClick={this.decrement} className="button">-</button>
              {this.state.showcounter ?
              <div>
                 <Progressbar />
              </div> : <h1>No Counter app</h1>
              
              }
            </div>
        )
    };
}

export default Counter;