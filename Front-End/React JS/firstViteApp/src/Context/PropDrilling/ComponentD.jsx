import React from 'react'

function ComponentD({ name, setName }) {
    return (
        <div>
            <h1>ComponentA</h1>
            <h2>Name : {name}</h2>
            <button onClick={() => { setName("niyati") }}>ChangeName</button>
        </div>
    )
}

export default ComponentD