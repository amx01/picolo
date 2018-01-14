import React from 'react'
import PropTypes from 'prop-types'

const NumberInput = (props) => {
  const { placeholder } = props
  return (
    <input placeholder={placeholder}/>
  )
}

export { NumberInput }
