import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setZero } from '../../features (Slice)/Counter/counterSlice'

function CouterComponent() {

    //counter is slice name which passed in store

    const count = useSelector((state) => state.counter.count)

    const dispatch = useDispatch()

  return (
    <div>
        <h1> Count : {count} </h1>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button style={{marginRight : "10px", marginLeft : "10px"}} onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CouterComponent