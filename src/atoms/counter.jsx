import React from 'react'

  // hooks
import { useState } from 'react'

// styles
import '../styles/counter.css'

export default function Counter() {
  const [count, setCount] = useState(() => {
    return 0    
  })

  function decrementCount() {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1)       
    }
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
      <div>
        <h1>Count { count }</h1>
        <button className='decrement' onClick={decrementCount}>Decrement</button>
        <button className='increment' onClick={incrementCount}>Increment</button>
        <br/>
        <button className='reset' onClick={resetCount}>reset</button>
      </div> 
  )
}
