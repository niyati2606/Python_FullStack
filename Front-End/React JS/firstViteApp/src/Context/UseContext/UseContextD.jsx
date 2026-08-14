import React, { useContext } from 'react'
import { passData } from './UseContextA'

function UseContextD() {

  const {name, setName} = useContext(passData)

  return (
    <div>
      <h1>ContextD</h1>
      <hr></hr>
      <h1>Context D Name : {name}</h1>
      <button className='btn btn-primary' onClick={() => setName("niya")}>Change Name</button>
    </div>
  )
}

export default UseContextD