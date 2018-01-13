import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/home">
        <div>Logo</div>
      </Link>
      <div className="right">
        <Link to="/bets">Make Bet</Link>
        <Link to="/wallet">My Wallet</Link>
      </div>
    </div>
  )
}

export default Header
