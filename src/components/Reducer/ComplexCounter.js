import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.payload }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.payload }
    case 'reset':
      return { ...state, firstCounter: initialState.firstCounter }

    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.payload }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.payload }
    case 'reset2':
      return { ...state, secondCounter: initialState.secondCounter }
    default:
      return state
  }
}

export default function ComplexCounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>First Counter: {state.firstCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 1 })}>Reset</button>

      <br /><br />

      <div>Second Counter: {state.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment2', payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'increment2', payload: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: 'decrement2', payload: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'decrement2', payload: 5 })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: 'reset2', payload: 1 })}>Reset</button>
    </div>
  )
}
