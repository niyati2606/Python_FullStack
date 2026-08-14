import React from 'react'
import ComponentD from './ComponentD'

function ComponentC({name,setName}) {
    return (
        <div>
            <h1>ComponentC</h1>
            <h2>Name : {name}</h2>
            <ComponentD name={name} setName={setName} />
        </div>
    )
}

export default ComponentC