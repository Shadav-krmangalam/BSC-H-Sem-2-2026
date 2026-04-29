import {Link , NavLink} from "react-router-dom"
function Navbar() {
  return (
    <>
    <NavLink to="/about/123_JOHN" style={({isActive})=>({color:isActive ? "red":"blue"})}>About</NavLink>
     <NavLink to="/contact" style={({isActive})=>({color:isActive ? "red":"blue"})}>Contact</NavLink>
    
    </>
  )
}

export default Navbar