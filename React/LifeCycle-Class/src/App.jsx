import React from 'react'
class App extends React.Component{

  constructor(){
    super()

    this.state={
      count:0
    }
  }

  increment = ()=>{
    this.setState({count:this.state.count+1})
  }
  shouldComponentUpdate(nextProps,nextState){
     if(nextState.count>5){
      console.log('Render')
      return true
     }
     console.log('No Re-rendering')
     return false
  }

  componentDidUpdate(){
    console.log("Component updated")
  }

  componentDidMount(){
    console.log("Mounted Initially")
  }

  render(){
    return (
      <>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      </>
    )
  }

}
export default App;