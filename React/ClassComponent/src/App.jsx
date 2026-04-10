import React from "react";
class App extends React.Component{

constructor(){
  super();
  this.state = {
    count:0,
    name:"Alex",
    Task:"incomplete"
  }
  // let count = 0
}

increment = ()=>{
  this.setState({count:this.state.count+1,name:"Joy",Task:"done"})
}


  render(){
    return(
      <>
      <span>Count : {this.state.count}</span>
      <br />
      <button onClick={this.increment}>+</button>
      <h1>{this.state.name},{this.state.Task}</h1>
      
      </>
    )
  }

}


export default App;