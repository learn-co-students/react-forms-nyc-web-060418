import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: '',
    lastName: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        First Name:<input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        /><br/>
        Last Name:<input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
