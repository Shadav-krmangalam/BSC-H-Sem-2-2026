// function App(){
//   let flag = false;

//   if(flag===true){
//     return (
//       <h1>
//         Hello True
//       </h1>
//     )
//   }else{
//     return (
//       <p>Hello False</p>
//     )
//   }

// }
// export default App;




function App(){
  let flag =false
  return (
    <>
    {flag===true ?<h1>Hello Ternary True</h1> : <p>Ternary False</p>}
    </>
  )

}

export default App;