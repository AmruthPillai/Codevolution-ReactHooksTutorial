import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { UserContext, ChannelContext } from './Contexts'

export default function ComponentB() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <strong>Component B</strong> = UserContext: {user}, ChannelContext: {channel}
      <ComponentC />
    </div>
  )
}
