import React from 'react'
import { connect } from 'react-redux';

const Todos = ( { todos }) => {
    return (
      <ul>
        {todos.map(todo =>
          <li>{todo}</li>)
        }
      </ul>
    )
}

export default connect(s => ({todos: s.todos}))(Todos);
