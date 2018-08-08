// Code ControlledInput Component Here
import React, {Component} from 'react'
export default class ControlledInput extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }


  render() {
    <form onSubmit = {event => this.handleSubmit(event)}
    <input type = "text" value = {this.state.value} onChange = {this.handleChange} />
    <input type = "submit" />
    </form>
  }
}

    
