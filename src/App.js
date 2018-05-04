import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BTContainer} from "./BTContainer";

class App extends Component {
  render() {
    return (
        <div className={"App"}>
            <BTContainer />
        </div>
    );
  }
}

export default App;
