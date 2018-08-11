// src/components/ControlledInput.js
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    handleLastNameChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default ControlledInput;