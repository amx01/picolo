import React, { Component } from 'react'

class BetsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentBets: [
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe"
        }
      ]
    }

    this.placeBet = this.placeBet.bind(this)
    this.displayBets = this.displayBets.bind(this)
  }

  displayBets(){
    const currentBets = this.state.currentBets
    return currentBets.map((ele, idx) => {
      return (
        <div key={idx}>
          <div>{ele.betAmt} PIC</div>
          <div>{ele.coin} at {ele.betClosePrice}</div>
          <div>by {ele.expiryDate} at {ele.expiryTime}</div>
          <div onClick={this.placeBet}>Place Bet</div>
        </div>
      )
    })
  }

  placeBet(){
    this.props.history.push("/placeBets")
  }

  render() {
    return (
      <div>
        <div>Active Bets</div>
        { this.displayBets() }
      </div>
    )
  }
}

export default BetsContainer
