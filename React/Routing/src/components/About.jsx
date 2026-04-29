import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  let {username} = useParams();

  const handleChange = (e)=>{
    e.preventDefault();
    console.log(username)
    navigate('/contact')
  }
  return (
    <div>About

      <form onSubmit={handleChange}>
        <input type="text" name="" id="" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default About