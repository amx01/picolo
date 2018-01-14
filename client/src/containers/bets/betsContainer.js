import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import BooleanModal from '../utility/modal/booleanModal'
import Notification from '../utility/notifications/notification'
import {
  // action
} from '../../modules/actionCreators/betActionCreators/betActionCreators'

class BetsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      showConfirmBet: false,
      betPlacedNotification: false,
      currentBets: [
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betID: "1",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betID: "1",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betID: "1",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betID: "1",
          betMaker: "John Doe"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betID: "1",
          betMaker: "John Doe"
        }
      ]
    }

    this.placeBet = this.placeBet.bind(this)
    this.displayBets = this.displayBets.bind(this)
    this.confirmBet = this.confirmBet.bind(this)
    this.cancelBet = this.cancelBet.bind(this)
    this.closeNotification = this.closeNotification.bind(this)
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
    this.setState({
      showConfirmBet: false,
      betPlacedNotification: true,
    })
  }

  cancelBet(){
    this.setState({
      showConfirmBet: false
    })
  }

  closeNotification(){
    this.setState({
      betPlacedNotification: false
    })
  }

  render() {
    const { showConfirmBet, betPlacedNotification } = this.state
    return (
      <div className="table">
        {
          betPlacedNotification &&
          <Notification
            headerText={"Success"}
            type={"Success"}
            primaryMessage={"Your bet has been placed."}
            closeNotification={this.closeNotification}
            />
        }
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
