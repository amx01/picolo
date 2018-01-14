import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import {
  DateInput,
  NumberInput,
  TextInput,
  TimeInput,
} from '../utility/inputs'
// import PropTypes from 'prop-types'

class PlaceBets extends Component {
  constructor(props){
    super(props)

    this.state = {
      addBetMenu: [
        {
          text: "Coin you'd like to bet on",
          placeholder: "Select coin",
          type: "text"
        },
        {
          text: "Price prediction (USD)",
          placeholder: "Enter dollar amount",
          type: "num"
        },
        {
          text: "Your bet amount (PIC)",
          placeholder: "Enter PIC amount",
          type: "num"
        },
        {
          text: "Bet end date (PST)",
          placeholder: "MM/DD/YYYY",
          type: "date"
        },
        {
          text: "Bet end time (PST)",
          placeholder: "HH:MM:SS AM",
          type: "time"
        },
      ]
    }
    this.renderBetRows = this.renderBetRows.bind(this)
  }

  renderBetRows(){
    const addBetMenu = this.state.addBetMenu
    return addBetMenu.map((ele, idx) => {
      const { text, type, placeholder } = ele
      let inputType
      switch(type) {
       case "text":
         inputType = <TextInput placeholder={placeholder}/>
         break
       case "num":
         inputType = <NumberInput placeholder={placeholder}/>
         break
       case "date":
         inputType = <DateInput placeholder={placeholder}/>
         break
       case "time":
        return inputType = <TimeInput placeholder={placeholder}/>
       default:
        return ""
      }
      return (
        <div key={idx}>
          <div>{text}</div>
          { inputType }
          <div>{type}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>Add Bet</div>
        <div className="">
          {this.renderBetRows()}
        </div>
      </div>
    )
  }
}

export default PlaceBets
