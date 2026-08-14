import React, { createContext, useState } from 'react'
import UseContextB from './UseContextB'
import UseContextC from './UseContextC'
import UseContextD from './UseContextD'

export const passData = createContext()

function UseContextA() {

  const [name, setName] = useState("niyati")
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>ContextA</h1>
      <h1>Context A Name : {name}</h1>
      <passData.Provider value={{name, setName, count, setCount}}>
        <UseContextB />
        <UseContextC />
        <UseContextD />
      </passData.Provider>
    </div>
  )
}

export default UseContextA