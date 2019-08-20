import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todos from './components/todos/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
