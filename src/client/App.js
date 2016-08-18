import React, { Component } from 'react';
import './App.css';

import {Button,Navigation} from './common/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <p className="App-intro">
          <Button />
        </p>
      </div>
    );
  }
}

export default App;
