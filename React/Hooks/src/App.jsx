import { useEffect, useState } from "react";

function App(){
  const [count,setCount] = useState(0)
  const[name,setName] = useState("Alex")
  const [task,setTask] = useState("Pending")

  const countChange = ()=>{
    setCount(count+1)
  }
  const nameChange = ()=>{
    setName("Joy")
  }

  const taskChange = ()=>{
    setTask("Done")
  }

  useEffect(()=>{
    console.log("Hello")
  },[count,task])

  return (
    <>
   <h1>Count : {count}</h1>
   <button onClick={countChange}>+</button>

   <h1>Name : {name}</h1>
   <button onClick={nameChange}>Name Change</button>

   <h1>Task : {task}</h1>
   <button onClick={taskChange}>Change task</button>
    </>
  )
}

export default App;