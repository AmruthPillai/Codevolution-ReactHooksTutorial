import React, { useState } from 'react'

export default function HookCounterThree() {
  const initialNameState = { firstName: '', lastName: '' }
  const [name, setName] = useState(initialNameState)

  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />

        <h3>Hello, {name.firstName} {name.lastName}!</h3>
        <h5>{JSON.stringify(name)}</h5>
      </form>
    </div>
  )
}
