import React, { useState, useEffect } from 'react'

export default function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect was called!')
    window.addEventListener('mousemove', logMousePosition)

    return () => window.removeEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
      x: {x}<br />
      y: {y}
    </div>
  )
}
