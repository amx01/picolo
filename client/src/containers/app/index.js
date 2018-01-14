import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import BetsContainer from '../bets/betsContainer'
import PlaceBets from '../bets/placeBets'
import WalletContainer from '../wallet/walletContainer'
import Header from '../utility/layout/header'

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/wallet" component={WalletContainer} />
      <Route exact path="/bets" component={BetsContainer} />
      <Route exact path="/placeBets" component={PlaceBets} />
    </main>
  </div>
)

export default App
