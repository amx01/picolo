import React from 'react'
import PropTypes from 'prop-types'

const DateInput = (props) => {
  const { placeholder } = props
  return (
    <input placeholder={placeholder}/>
  )
}

export { DateInput }
