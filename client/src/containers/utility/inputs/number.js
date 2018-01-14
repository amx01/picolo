import React, { Component } from 'react'

class NumberInput extends Component {
  constructor(props){
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(evt){
    if (evt.which < 48 || evt.which > 57){
        evt.preventDefault()
    }
  }

  render() {
    const { placeholder} = this.props
    return (
      <input className="child" onKeyDown={this.handleKeyDown} placeholder={placeholder}/>
    )
  }
}


export { NumberInput }
