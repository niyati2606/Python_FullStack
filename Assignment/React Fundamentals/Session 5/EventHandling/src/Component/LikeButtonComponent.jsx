import React, { useState } from 'react'

function LikeButtonComponent() {

    let [count, setCount] = useState(0)

    let increaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className="btn btn-outline-secondary btn-lg m-4" onClick={increaseCount}>❤️ {count}</button>
        </div>
    )
}

export default LikeButtonComponent