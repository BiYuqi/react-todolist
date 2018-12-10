import React, { Component } from 'react';
import TodoApp from './components/index';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="App-logo" src={logo} alt=""/>
          <TodoApp />
        </header>
      </div>
    );
  }
}

export default App;
