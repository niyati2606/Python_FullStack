import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    
    name : "counter",
    
    initialState : {
        count : 1
    },

    reducers :{
        increment : (state) => {
            state.count += 1
        },

        decrement : (state) => {
            state.count -= 1
        },

        setZero : (state) => {
            state.count = 0
        },

        incrementByTwo : (state) => {
            state.count += 2
        },

        multiplyByTwo : (state) => {
            state.count *= 2
        }
    }
})

export const { increment, decrement, setZero, incrementByTwo, multiplyByTwo } = counterSlice.actions
export default counterSlice.reducer