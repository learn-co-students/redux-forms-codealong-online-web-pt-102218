import React, { Component } from 'react'
import { connect } from 'react-redux'

  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    }
  }

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state)
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo </label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)( CreateTodo );
