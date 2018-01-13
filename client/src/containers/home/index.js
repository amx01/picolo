import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import {
  // action
// } from '../../modules/betActionCreators/betActionCreators'

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
)

const mapStateToProps = state => ({
  // props: state.foo,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // action,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
