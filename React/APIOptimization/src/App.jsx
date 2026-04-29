// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import axios from "axios"

// function App(){

//   const [query,setQuery] = useState("")
//   const [result,setResult] = useState("")

//   useEffect(()=>{

//     const debouncing = setTimeout(()=>{
//       //fetch API

//       // let response = await fetch(`api/dummy/query=${query}`)
//       // setResult(response)
//       setResult(query)

//     },3000)

//     return ()=> clearTimeout(debouncing)

//   },[query])

//   return ( 
//     <>
//     <input type="text" onChange={(e)=>setQuery(e.target.value)} />
//     <div>Result : {result} </div>
//     </>
//   )
// }
// export default App;


function App(){
   const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page="

  const [page,setPage] = useState(1)
  const [movies,setMovies] = useState([])

  const handleIncrement = ()=>{
    setPage(page+1)
  }
  const handleDecrement = ()=>{
    if(page>1){
      setPage(page-1)
    }
  }

  useEffect(()=>{
    async function fetchingAPI(){
      let response = await axios.get(`${API}${page}`)
      console.log(response.data.results)
      setMovies(response.data.results)

    }
    fetchingAPI();

  },[page])

  return (
    <>
    <button onClick={handleDecrement}>Previous</button>
    <span>{page}</span>
    <button onClick={handleIncrement}>Next</button>

    <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
      {
      movies.map((item,index)=>{
        return (
          <div style={{width:"200px"}}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" width={100}/>
            <h4>{item.title}</h4>
            </div>
        )

      })

      }
    </div>
    </>
  )
}

export default App;
