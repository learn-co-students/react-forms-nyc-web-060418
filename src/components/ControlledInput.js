// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleFieldChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleFieldChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
