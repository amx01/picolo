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
    buttonClass,
    text,
    className,
  } = props

  return (
    <div className={className}>
      <div className="text-container">
        <div className="text left bet">{betAmt} PIC</div>
        <div className="text center">
          <div className="bold details">
            {coin} at {betClosePrice}
            <div className="light-bold">
              by {expiryDate} at {expiryTime}
            </div>
          </div>
        </div>
        { button ?
          <div className="text">
            <div className={buttonClass} onClick={buttonAction}>{buttonText}</div>
          </div>
          :
          <div className="text">{text}</div>
        }
      </div>
    </div>
  )
}

export default TableRow
