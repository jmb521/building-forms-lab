// Add BandInput component
import React, { Component } from 'react'
class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Band</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }
}

export default BandInput
