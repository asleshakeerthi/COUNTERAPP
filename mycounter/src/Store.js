import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"

export var store = configureStore({
    reducer : {
        counter  : counterSlice
    }
})