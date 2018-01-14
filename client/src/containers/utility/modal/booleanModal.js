import React from 'react'
import PropTypes from 'prop-types'

const BooleanModal = (props) => {
  const { primaryMessage, secondaryMessage, confirm, cancel } = props
  return (
    <div className="modal small">
      <div className="message primary">{primaryMessage}</div>
      <div className="message secondary">{secondaryMessage}</div>
      <div className="btn-container">
        <div onClick={cancel} className="btn small grey">Cancel</div>
        <div onClick={confirm} className="btn orange small">Yes</div>
      </div>
    </div>
  )
}

export default BooleanModal
