import React from 'react'

const DateTime = (props) => {
  const { inputValue, onClickHandler } = props
  return (
    <div className="child" onClick={onClickHandler}>{inputValue}</div>
  )
}

export { DateTime }
