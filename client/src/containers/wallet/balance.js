import React from 'react'
import PropTypes from 'prop-types'

const Balance = (props) => {
  const { PICBalance, text, USDBalance, className } = props
  return (
    <div className="table">
      <div className="body no-margin-bottom">
        <div className="row no-border">
          <div className="text-container">
            <div className="text left simple">
              {text}
            </div>
            <div className="text simple left-align">
              {PICBalance.toFixed(5)}
            </div>
            <div className="text simple">
              (${USDBalance.toFixed(2)} USD)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance
