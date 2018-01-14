import React, { Component } from 'react'
import Select from 'react-select'

class DropDown extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedOption: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    console.log('handle it')
  }

  render(){
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value
    return(
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'Ethereum', label: 'Ethereum(ETH)' },
          { value: 'Ripple', label: 'Ripple(XRP)' },
          { value: 'Bitcoin', label: 'Bitcoin(BTC)' },
        ]}
      />
    )
  }
}

export { DropDown }
