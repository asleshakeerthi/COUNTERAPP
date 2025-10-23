 import { createSlice } from "@reduxjs/toolkit";
 var initialState = {
    value : 0
 }
 var counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        reset : (state)=>{
            state.value = 0
        }
    }
 })
 export  var {increment,decrement,reset} =counterSlice.actions
 export default counterSlice.reducer