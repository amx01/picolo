import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import BooleanModal from '../utility/modal/booleanModal'

class BetsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      showConfirmBet: false,
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
    this.confirmBet = this.confirmBet.bind(this)
    this.cancelBet = this.cancelBet.bind(this)
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
          buttonClass={"btn orange"}
          buttonText={"Take bet"}
          buttonAction={this.placeBet}
        />
      )
    })
  }

  showConfirmBetModal(){
    let showConfirmBet = this.state.showConfirmBet
    if (!showConfirmBet) {
      this.setState({
        showConfirmBet: !this.state.showConfirmBet
      })
    }

  }

  placeBet(){
    // this.props.history.push("/placeBets")
    this.showConfirmBetModal()
  }

  confirmBet(){
    // confirmBet with API.then
    this.setState({
      showConfirmBet: false
    })
  }

  cancelBet(){
    this.setState({
      showConfirmBet: false
    })
  }

  render() {
    const { showConfirmBet } = this.state
    return (
      <div className="table">
        { showConfirmBet &&
          <BooleanModal
            primaryMessage={"Take this bet?"}
            secondaryMessage={"Are you sure you want to take this bet?"}
            confirm={this.confirmBet}
            cancel={this.cancelBet}
          />
        }
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
