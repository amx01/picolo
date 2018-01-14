import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class PlaceBets extends Component {
  constructor(props){
    super(props)

    this.state = {
      addBetMenu: [
        {
          text: "Coin you'd like to bet on",
          type: "text"
        },
        {
          text: "Price prediction (USD)",
          type: "num"
        },
        {
          text: "Your bet amount (PIC)",
          type: "num"
        },
        {
          text: "Bet end date (PST)",
          type: "date"
        },
        {
          text: "Bet end time (PST)",
          type: "time"
        },
      ]
    }
    this.renderBetRows = this.renderBetRows.bind(this)
  }

  renderBetRows(){
    const addBetMenu = this.state.addBetMenu
    return addBetMenu.map((ele, idx) => {
      return (
        <div key={idx}>
          <div>{ele.text}</div>
          <div>{ele.type}</div>
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
