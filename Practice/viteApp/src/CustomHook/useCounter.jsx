import React, { useState } from 'react'

function useCounter(num) {

    const [count, setCount] = useState(num)

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
    count,increment,decrement,setToZero
  }
}

export default useCounter