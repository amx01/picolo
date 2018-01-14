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
          className={"row"}
          key={idx}
          betAmt={ele.betAmt}
          coin={ele.coin}
          betClosePrice={ele.betClosePrice}
          expiryDate={ele.expiryDate}
          expiryTime={ele.expiryTime}
          button={true}
          buttonClass={"btn-green"}
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
      <div className="table">
        <div className="name">Active Bets</div>
        <div className="body">
          <div className="table-header">
            <div className="text-container">
              <div className="text">Bet(PIC)</div>
              <div className="text left-align">Details</div>
            </div>
          </div>
          { this.displayBets() }
        </div>
      </div>
    )
  }
}

export default BetsContainer
