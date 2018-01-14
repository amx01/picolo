import React from 'react'
import PropTypes from 'prop-types'

const Notification = (props) => {
  const { headerText, type, primaryMessage, secondaryMessage }
  return (
    <div className="notification-container">
      <div>{headerText}</div>
      <div>{primaryMessage}</div>
      { secondaryMessage &&
        <div>{secondaryMessage}</div>
      }
    </div>
  )
}

export default Notification
