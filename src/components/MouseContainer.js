import React, { useState } from 'react'
import HookMouse from './HookMouse'

export default function MouseContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse Tracking</button>
      {display && <HookMouse />}
    </div>
  )
}
