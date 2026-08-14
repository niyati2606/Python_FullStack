import React from 'react'
import ComponentC from './ComponentC'

function ComponentB({name,setName}) {
    return (
        <div>
            <h1>ComponentB</h1>
            <ComponentC name={name} setName={setName} />
        </div>
    )
}

export default ComponentB