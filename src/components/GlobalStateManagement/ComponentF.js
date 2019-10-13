import React, { useContext } from 'react'
import { CountContext } from './Contexts'

export default function ComponentF() {
  const countContext = useContext(CountContext)

  return (
    <div>
      Component F: {countContext.count}
      <button onClick={() => countContext.dispatch('increment')}>Increment</button>
      <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.dispatch('reset')}>Reset</button>
    </div>
  )
}
