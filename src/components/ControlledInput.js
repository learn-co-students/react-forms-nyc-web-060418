// Code ControlledInput Component Here

import React, { Component } from 'react';

class ControlledInput extends Component {
    
    state = {
        value: '',
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault()
        const firstName = event.target.children[0].value
        const lastName = event.target.children[1].value
        console.log(firstName, lastName)
    }


    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                {/* <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
                <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} /> */}
                <input type="submit"/>
            </form>
        );
    }
}

export default ControlledInput;
