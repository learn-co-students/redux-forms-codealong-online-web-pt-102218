import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateToDo extends Component {

  constructor() {
    super()
    this.state = {
      texts: '',
    }
  }

  handleChange = event => {
    this.setState({
      texts: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }




  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
      addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateToDo)