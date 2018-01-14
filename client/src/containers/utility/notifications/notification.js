import React from 'react'
import PropTypes from 'prop-types'

const Notification = (props) => {
  const { headerText, type, primaryMessage, secondaryMessage, closeNotification } = props
  return (
    <div className="notification-container">
      <div className="close-x" onClick={closeNotification}/>
      <div className="message success">{headerText}</div>
      <div className="message primary">{primaryMessage}</div>
      { secondaryMessage &&
        <div>{secondaryMessage}</div>
      }
    </div>
  )
}

export default Notification
