import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTODO } from '../../features (Slice)/todo/todoSlice'

function AddTODO() {

    const [name, setName] = useState("")

    console.log(name)

    const dispatch = useDispatch()

    const onsubmit = (e) => {
        e.preventDefault()

        dispatch(addTODO(name))
        setName("")
    }

    return (
        <div className='container mt-3'>
            <div class="mb-3">
                <input type="text" id="name"
                    class="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <button type="button" class="btn btn-primary mt-2" onClick={onsubmit}> Add Name </button>
            </div>
        </div>
    )
}

export default AddTODO