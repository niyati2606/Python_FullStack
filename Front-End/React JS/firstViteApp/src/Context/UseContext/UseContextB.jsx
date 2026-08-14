import React, { useContext } from 'react'
import { passData } from './UseContextA'

function UseContextB() {

  const {count, setCount} = useContext(passData)

  return (
    <div>
      <h1>ContextB</h1>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default UseContextB