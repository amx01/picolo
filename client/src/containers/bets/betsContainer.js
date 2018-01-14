import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'

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
        <TableRow
          key={idx}
          betAmt={ele.betAmt}
          coin={ele.coin}
          betClosePrice={ele.betClosePrice}
          expiryDate={ele.expiryDate}
          expiryTime={ele.expiryTime}
          button={true}
          buttonText={"Place bet"}
          buttonAction={this.placeBet}
        />
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
