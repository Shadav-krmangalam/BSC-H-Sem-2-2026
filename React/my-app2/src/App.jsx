import {Component1,ComponentExtra} from "./Components/Component1";

function App(){

  let name = "Alex"

  return (
  <div>
      <h1>Hello Students</h1>
      <p>Hello Para</p>
      <Component1 name1={name} value={5} assignment={"done"}/>
      <ComponentExtra/>
  </div>
  )
}

export default App;