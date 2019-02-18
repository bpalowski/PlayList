import React, { Component } from 'react';
import './App.css';

class First extends Component {
  render() {
    return (
      <div className="title" id="title">
        <h2>Hello 2</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img />
        <input type="text" />
      </div>
    );
  }
}
class PlayList extends Component {
  render() {
    return (
      <div id="playlist">
        <img />
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {



  render() {
    return (
      <div id="app1" >
        <h1>Hello</h1>
        <First />
        <First />
        <Filter />
        <PlayList />
        <PlayList />
        <PlayList />
      </div >
    );
  }
}

export default App;
