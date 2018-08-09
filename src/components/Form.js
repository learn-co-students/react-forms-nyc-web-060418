import React from 'react'

export default class Form extends React.Component{
    state = {
        firstName: "John",
        lastName: "Henry"
    }
     
    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
          <form>
            <input type="text" id="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
            <input type="text" id="lastName" onChange={this.handleLastNameChange}value={this.state.lastName} />
          </form>
        )
    }    
}