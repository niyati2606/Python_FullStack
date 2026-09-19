import React, { createContext } from 'react'
import Feed from './Feed'

export const UserContext = createContext(null)

function MainContext() {
  const user = {
    username: 'niya',
    name: 'niyati patel',
  }

  return (
    <UserContext.Provider value={user}>
      <Feed />
    </UserContext.Provider>
  )
}

export default MainContext