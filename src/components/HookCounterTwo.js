import React, { useState } from 'react'

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>

      <button onClick={incrementByFive}>Increment by 5</button>
    </>
  )
}
