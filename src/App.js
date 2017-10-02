import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Click from './components/click/Click';
import Giphy from './components/giphy/Giphy';
import Todo from './components/todo/Todo';
import Hello from './components/Hello';
import Navbar from './components/Navbar';

import Todo2 from './components/todo2/Todo';

class App extends Component {

  render() {

    const links = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Click',
        to: '/click'
      },
      {
        name: 'Todo',
        to: '/todo'
      },
      {
        name: 'Giphy',
        to: '/giphy'
      }
    ];

    return (
      <Router>
        <div>
          {/* <ul>
            <li><Link to="/">Click</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/giphy">Giphy</Link></li>
          </ul> */}
          <Navbar links={links} />
          <Route exact path="/" component={Hello}/>
          <Route path="/click" component={Click}/>
          <Route path="/todo" component={Todo2}/>
          <Route path="/giphy" component={Giphy}/>
        </div>
      </Router>
    );
  }
}

export default App;
