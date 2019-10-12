import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import { CountContext } from './Contexts'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function GlobalStateManagement() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
      <h4>Count: {count}</h4>

      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContext.Provider>
  )
}
