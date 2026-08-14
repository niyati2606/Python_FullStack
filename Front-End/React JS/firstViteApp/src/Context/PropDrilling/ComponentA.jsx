import React, { useState } from 'react'
import ComponentB from './ComponentB'

function ComponentA() {

    const [name, setName] = useState("niya")

    return (
        <div>
            <h1>ComponentA</h1>
            <h2>Name : {name}</h2>
            <ComponentB name = {name} setName = {setName}/>
        </div>
    )
}

export default ComponentA