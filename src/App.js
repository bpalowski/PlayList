import React, { Component } from 'react';


class App extends Component {

  render() {
    let pos = 'center';
    return (
      <div >
        <h1 style={
          {
            textAlign: pos
          }
        }>Hello</h1>
      </div >
    );
  }
}

export default App;
