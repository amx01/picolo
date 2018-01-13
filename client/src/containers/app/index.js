import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import BetsContainer from '../bets/betsContainer'
import WalletContainer from '../wallet/walletContainer'
import Header from '../utility/layout/header'

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/wallet" component={WalletContainer} />
      <Route exact path="/bets" component={BetsContainer} />
    </main>
  </div>
)

export default App
