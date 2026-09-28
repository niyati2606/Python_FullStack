import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features (Slice)/Counter/counterSlice";
import todoSlice from "../features (Slice)/todo/todoSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
        todoname: todoSlice
    }
})