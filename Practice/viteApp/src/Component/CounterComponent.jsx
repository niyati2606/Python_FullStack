import React from 'react'
import useCounter from '../CustomHook/useCounter'
import NavBar from '../Common/NavBar'

function CounterComponent() {

    const {count,increment,decrement,setToZero} = useCounter(0)

  return (
    <div>
      <NavBar/>
        <h1 className='m-2'> Count : {count}</h1>
        
        <button className='m-2 btn btn-success' onClick={increment}>Increment</button>
        <button className='m-2 btn btn-danger' onClick={decrement}>Decrement</button>
        <button className='m-2 btn btn-warning' onClick={setToZero}>Set To 0</button>
    </div>
  )
}

export default CounterComponent