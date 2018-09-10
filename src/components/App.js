import React, { Component } from 'react';
import LeftNav from './LeftNav';
import TitleBar from './TitleBar';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <LeftNav />
        <HomePage />
      </div>
    );
  }
}

export default App;
