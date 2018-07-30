import React, { Component } from 'react';
import { Header } from './web/Header';
import { Main } from './web/Main';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
