import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <Link className="text" to="/">
        <div>Picolo</div>
      </Link>
      <div className="text right">
        <Link className="link" to="/placeBets">Add Bet</Link>
        <Link className="link" to="/wallet">My Wallet</Link>
      </div>
    </div>
  )
}

export default Header
