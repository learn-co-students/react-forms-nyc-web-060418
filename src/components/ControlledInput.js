// Code ControlledInput Component Here
import React from 'react'

export default class Form extends React.Component{
  state = {
    firstName: "",
    lastName: ""
  }

  handleLastNameChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render(){
    return(
      <form>
      <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
      <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange}/>
      </form>
    )
  }
}
