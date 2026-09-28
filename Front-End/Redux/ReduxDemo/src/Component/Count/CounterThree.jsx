import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByTwo, multiplyByTwo } from '../../features (Slice)/Counter/counterSlice'

function CounterThree() {

    const counts = useSelector((state) => state.counter.count)

    console.info(counts)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count : {counts}</h1>

            <button onClick={() => dispatch(incrementByTwo())}>Increment by 2</button>
            <button style={{marginLeft : "10px"}} onClick={() => dispatch(multiplyByTwo())}>Multiply by 2</button>
        </div>
    )
}

export default CounterThree