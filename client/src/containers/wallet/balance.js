import React from 'react'
import PropTypes from 'prop-types'

const Balance = (props) => {
  const { PICBalance, text, USDBalance } = props
  return (
    <div>
      <div>{text}</div>
      <div>{`${PICBalance.toFixed(5)}`} PIC</div>
      <div>{"($" + `${USDBalance.toFixed(2)}` + " USD)"}</div>
    </div>
  )
}

export default Balance
