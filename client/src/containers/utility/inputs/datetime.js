import React from 'react'
import PropTypes from 'prop-types'

const DateTime = (props) => {
  const { placeholder, onClickHandler } = props
  return (
    <div onClick={onClickHandler}>Click for Time Picker</div>
  )
}

export { DateTime }
