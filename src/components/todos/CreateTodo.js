import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    console.log("rendered: CreateTodo")
    return (
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={ e => this.handleChange(e) } value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>

       {this.state.text}
      </div>
    )
  }
}

const addToDo = (message) => ({type: "ADD_TODO", todo: message})

export default connect(s => ({todos: s.todos}), {addToDo} )(CreateTodo);
