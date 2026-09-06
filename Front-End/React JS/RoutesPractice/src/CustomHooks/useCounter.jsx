import React, { useState } from 'react'

function useCounter(number) {

    const [count, setCount] = useState(number)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const setToZero = () => {
        setCount(0)
    }

    return {
        count, increment, decrement, setToZero
    }
}

export default useCounter   