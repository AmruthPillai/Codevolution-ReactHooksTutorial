import React from 'react'
import useCounter from './useCounter'

export default function CounterOne() {
  const [count, increment, decrement, reset] = useCounter()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
