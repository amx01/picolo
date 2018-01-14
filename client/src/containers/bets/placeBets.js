import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import {
  NumberInput,
  TextInput,
  DateTime,
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
          placeholder: "Click for time picker",
          type: "datetime"
        },
      ]
    }
    this.renderBetRows = this.renderBetRows.bind(this)
    this.confirmBet = this.confirmBet.bind(this)
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
       case "datetime":
         inputType = <DateTime/>
         break
       default:
        return ""
      }
      return (
        <div className="content" key={idx}>
          <div className="cell left-padding">
            <div className="left-float medium-bold">{text}</div>
          </div>
          <div className="cell">
            <div className="input">{ inputType }</div>
          </div>
        </div>
      )
    })
  }

  confirmBet(){

  }

  render() {
    return (
      <div className="table medium-width">
        <div className="name">New Bets</div>
        <div className="body">
        <div className="card">
          {this.renderBetRows()}
        </div>
        <div className="text">
          <div className="btn-orange" onClick={this.confirmBet}>Confirm Bet</div>
        </div>
        </div>
      </div>
    )
  }
}

export default PlaceBets
