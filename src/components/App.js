import React, { Component } from 'react';
import LeftNav from './LeftNav';
import TitleBar from './TitleBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <LeftNav />
      </div>
    );
  }
}

export default App;
