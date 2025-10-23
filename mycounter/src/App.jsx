import React from "react";
import { increment,decrement,reset } from "./counterSlice";
import { useSelector,useDispatch } from "react-redux";

function App(){
  var count =useSelector((state)=>{return state.counter.value })
  var disPatch = useDispatch()
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{disPatch(increment())}}>Increment</button>
      <button onClick={()=>{disPatch(decrement())}}>decrement</button>
      <button onClick={()=>{disPatch(reset())}}>Reset</button>
       
    </div>
  )
}
export default App