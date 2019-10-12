import React from 'react'
import { UserContext, ChannelContext } from './Contexts'

export default function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {
          (user) => (
            <ChannelContext.Consumer>
              {
                (channel) => (
                  <div>
                    <strong>Component C</strong> = UserContext: {user}, ChannelContext: {channel}
                  </div>
                )
              }
            </ChannelContext.Consumer>
          )
        }
      </UserContext.Consumer>
    </div>
  )
}
