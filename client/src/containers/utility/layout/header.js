import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div className="right">
        <Link to="/placeBets">Make Bet</Link>
        <Link to="/wallet">My Wallet</Link>
      </div>
    </div>
  )
}

export default Header
