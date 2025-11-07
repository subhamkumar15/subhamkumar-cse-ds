import React from 'react'

const Car = (props) => {
  return (
    <div>
      <h1>THIS IS COMPONENT EXAMPLE</h1>
      <h2 style={{ color: props.color }}>This is {props.color} {props.brand}</h2>
      <button>Submit</button>
      <button>Click</button>
      <button>Check</button>
    </div>
  )
}
export default Car
