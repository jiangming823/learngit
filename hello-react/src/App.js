import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context){
        super(props, context);
        this.state = {
            // 显示当前时间
           
        }
    }
    render() {
        return (
            <div>
              <p>head</p>
              <div>{this.props.children}</div>

              <p>footer44444</p>
            </div>
        )
    }
  }
export default App;
