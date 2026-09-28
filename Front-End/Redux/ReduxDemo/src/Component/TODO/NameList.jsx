import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTODO, editTODO } from '../../features (Slice)/todo/todoSlice'

function NameList() {
    const { todo } = useSelector((state) => state.todoname)

    const dispatch = useDispatch()

    const handleEdit = (index, currentValue) => {
        const value = prompt("Edit name", currentValue)
        if (value !== null && value.trim() !== "") {
            dispatch(editTODO({ index, value }))
        }
    }

    return (
        <div className='container mt-3'>
            <ul className="list-group">
                {
                    todo && todo.map((name, index) => {
                        return (
                            <li className="list-group-item d-flex align-items-center" key={index}>
                                {name}
                                <button className='btn btn-outline-primary ms-auto' onClick={() => handleEdit(index, name)}>Edit</button>
                                <button className='btn btn-outline-danger mx-2' onClick={() => dispatch(deleteTODO(index))}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NameList