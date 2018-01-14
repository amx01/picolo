import React from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {
  const { placeholder } = props
  return (
    <input className="child" placeholder={placeholder}/>
  )
}

export { TextInput }
