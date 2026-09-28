import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slice/userSlice";

export default configureStore({

    reducer: {
        //declare slice here
        //userDetails : slice name which we declare in slice name part
        userDetails : userSlice
    }
})