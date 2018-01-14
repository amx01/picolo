import React from 'react'
import PropTypes from 'prop-types'

const TimeInput = (props) => {
  const { placeholder } = props
  return (
    <input placeholder={placeholder}/>
  )
}

export { TimeInput }
