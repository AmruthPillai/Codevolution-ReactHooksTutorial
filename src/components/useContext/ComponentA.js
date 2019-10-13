import React from 'react'
import ComponentB from './ComponentB'
import { UserContext, ChannelContext } from './Contexts'

export default function ComponentA() {
  return (
    <div>
      <UserContext.Provider value={'amruthpillai'}>
        <ChannelContext.Provider value={'webdev'}>
          <ComponentB />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
