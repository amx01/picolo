import React from 'react'

const TextInput = (props) => {
  const { placeholder, customClass } = props
  return (
    <input className={"child " + customClass} placeholder={placeholder}/>
  )
}

export { TextInput }
