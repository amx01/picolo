import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const {
    betAmt,
    coin,
    betClosePrice,
    expiryDate,
    expiryTime,
    button,
    buttonText,
    buttonAction,
    text,
  } = props

  return (
    <div>
      <div>{betAmt} PIC</div>
      <div>{coin} at {betClosePrice}</div>
      <div>by {expiryDate} at {expiryTime}</div>
      { button ?
        <div onClick={buttonAction}>{buttonText}</div>
        :
        <div>{text}</div>
      }
    </div>
  )
}

export default TableRow
