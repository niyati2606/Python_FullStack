import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setZero } from '../../features (Slice)/Counter/counterSlice'

function CounterTwoComponent() {

    const count = useSelector((state) => state.counter)

//    console.log("Second Com ---", count)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count : {count.count}</h1>
            <button onClick={() => dispatch(setZero())}>Reset</button>
        </div>
    )
}

export default CounterTwoComponent