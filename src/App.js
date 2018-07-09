import React, { Component } from 'react';
import { Header } from './web/Header';
import { Main } from './web/Main';
import { NavigationBar } from './web/NavigationBar';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <NavigationBar />
        <Main />
      </div>
    );
  }
}

export default App;
