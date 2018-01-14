import React, { Component } from 'react'
import TableRow from '../utility/table/tableRow'
import Balance from '../wallet/balance'

class WalletContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      userBalance: {
        PICBalance: 300.00000,
        USDBalance: 100.00
      },
      userBets: [
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe",
          betPlaceDate: "1/12",
          betPlaceTime: "7:30pm"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe",
          betPlaceDate: "1/12",
          betPlaceTime: "7:30pm"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe",
          betPlaceDate: "1/12",
          betPlaceTime: "7:30pm"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe",
          betPlaceDate: "1/12",
          betPlaceTime: "7:30pm"
        },
        {
          betAmt: 15,
          betClosePrice: 1800,
          coin: "ETH",
          expiryDate: "1/13",
          expiryTime: "12:00pm",
          betMaker: "John Doe",
          betPlaceDate: "1/12",
          betPlaceTime: "7:30pm"
        }]
      }
    this.renderWallet = this.renderWallet.bind(this)
  }

  renderBalance(){
    const userBalance = this.state.userBalance
    return (
      <div>
        <div>My Wallet</div>
        <Balance
          text={"Picolo Balance"}
          PICBalance={userBalance.PICBalance}
          USDBalance={userBalance.USDBalance}
        />
      </div>
    )
  }

  renderWallet(){
    const userBets = this.state.userBets
    return userBets.map((ele, idx) => {
      return (
        <TableRow
          key={idx}
          betAmt={ele.betAmt}
          coin={ele.coin}
          betClosePrice={ele.betClosePrice}
          expiryDate={ele.expiryDate}
          expiryTime={ele.expiryTime}
          text={"Bet placed " + `${ele.betPlaceDate}` + " at " + `${ele.betPlaceTime}`}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <div>{this.renderBalance()}</div>
        <div className="tableHeader">My Bets</div>
        <div>{this.renderWallet()}</div>
      </div>
    )
  }
}

export default WalletContainer
