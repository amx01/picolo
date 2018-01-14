import React from 'react'

const TextInput = (props) => {
  const { placeholder } = props
  return (
    <input className="child" placeholder={placeholder}/>
  )
}

export { TextInput }
