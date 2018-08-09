import React from 'react'

export default class ControlledInput extends React.Component{
  state = {
    value: '' 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}