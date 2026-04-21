import { useRef, useState } from "react";

function App(){
  // const myRef = useRef(null)

  // const handleChange = ()=>{
  //   myRef.current.value = "Hello predefine value"
  //   myRef.current.focus()

  // }


  const [data,setData] = useState({
    email:"",
    password:"",
   
  })

  const handleChangeEmail = (e)=>{
    setData((prev)=>({
      ...prev,
      email:e.target.value,
    }))
  }

  const handleChangePassword = (e)=>{
    setData((prev)=>({
      ...prev,
      password:e.target.value,
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!data.email.includes('@krmu')){
      alert("Invalid Email")
      return;
    }
    if(data.password.length<8){
      alert('Password must be greater than or equal to 8')
      return
    }
    console.log(data)
    setData({
    email:"",
    password:"",
   
  })
  }
  return (
    <>
    {/* <input type="text" ref={myRef}/>
    <button onClick={handleChange}>Changes</button> */}


    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" value={data.email} onChange={handleChangeEmail}/>
      <input type="password"  placeholder="password" value={data.password} onChange={handleChangePassword}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App;