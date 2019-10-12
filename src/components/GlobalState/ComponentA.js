import React, { useContext } from 'react'
import { CountContext } from './Contexts'

export default function ComponentA() {
  const countContext = useContext(CountContext)

  return (
    <div>
      Component A: {countContext.count}
      <button onClick={() => countContext.dispatch('increment')}>Increment</button>
      <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.dispatch('reset')}>Reset</button>
    </div>
  )
}
