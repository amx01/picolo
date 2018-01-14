import React from 'react'
import PropTypes from 'prop-types'

const DateTime = (props) => {
  const { inputValue, onClickHandler } = props
  return (
    <div className="child" onClick={onClickHandler}>{inputValue}</div>
  )
}

export { DateTime }
