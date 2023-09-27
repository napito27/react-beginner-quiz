import React from 'react'

  // components
import { useState } from 'react'

let color = ''

export default function Counter() {
  const [count, setCount] = useState(() => {
    return 0
  })

  function decrementCount() {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1)      
      color = 'red'
    }
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    color = 'green'
  }

  return (
      <div className='counter-box'>
        <h1>Count <span className={color} >{count}</span></h1>
        <button className='decrement' onClick={decrementCount}>Decrement</button>
        <button className='increment' onClick={incrementCount}>Increment</button>
      </div> 
  )
}
