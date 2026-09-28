import { createSlice } from "@reduxjs/toolkit";

const initialState = { todo: ["niyati", "ravi"] }

export const todoSlice = createSlice({
    name: "todo",

    initialState,

    reducers: {

        addTODO: (state, action) => {
            state.todo.push(action.payload)
        },

        editTODO: (state, action) => {
            const { index, value } = action.payload
            state.todo = state.todo.map((data, i) => (i === index ? value : data))
        },
        
        deleteTODO: (state, action) => {
            state.todo = state.todo.filter((data, index) => index != action.payload)
        }

    }
})

export const { addTODO, editTODO, deleteTODO } = todoSlice.actions
export default todoSlice.reducer