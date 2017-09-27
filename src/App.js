import React, { Component } from 'react';

import Click from './components/click/Click';
import Giphy from './components/giphy/Giphy';
import Todo from './components/todo/Todo';

class App extends Component {

  render() {
    return (
      <div>       
        <Click />
        <Todo />
        <Giphy />
      </div>
    );
  }
}

export default App;
