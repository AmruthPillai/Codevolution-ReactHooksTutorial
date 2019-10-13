import React, { useState, useEffect } from 'react'

export default function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - Updating Document Title')
    document.title = `You cliked ${count} times!`
  }, [count])

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times!</button>
    </>
  )
}
