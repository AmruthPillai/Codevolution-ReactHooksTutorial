import React, { useRef, useState, useEffect } from 'react'

export default function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  const tick = () => setTimer(prevTimer => prevTimer + 1)

  console.log('Rendering Hook Timer')

  return (
    <div>
      <h2>Hook Timer</h2>
      <h1>{timer}</h1>

      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}