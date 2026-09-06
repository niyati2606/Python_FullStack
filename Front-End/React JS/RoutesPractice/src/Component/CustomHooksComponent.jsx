import React from 'react'
import useCounter from '../CustomHooks/useCounter'

function CustomHooksComponent() {

    const { count, increment, decrement, setToZero } = useCounter(0)

    return (
        <div>
            <h1 className='p-5 bg-info'>Count : {count}</h1>

            <button className='btn btn-info m-3' onClick={increment}>Increment</button>
            <button className='btn btn-info m-3' onClick={decrement}>DEcrement</button>
            <button className='btn btn-info m-3' onClick={setToZero}>Set 0</button>
        </div>
    )
}

export default CustomHooksComponent