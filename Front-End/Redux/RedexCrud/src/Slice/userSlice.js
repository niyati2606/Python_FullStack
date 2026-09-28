import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "userDetails",
    initialState : {
        countValue : "niya"
    },

    reducers :{

    }
})

//need to declare globally so export slice otherwise will not get suggestion
export const {} = userSlice.actions
export default userSlice.reducer