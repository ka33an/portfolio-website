import {Link} from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className='Navbar'>
 
    <div className='Menu'> 
        <Link className="Menuitem" to ="/"> HOME</Link>
        <Link className="Menuitem" to ="/About"> ABOUT</Link>
        <Link className="Menuitem" to ="/Portfolio"> PORTFOLIO</Link>    
    </div>
 
   </nav>
  )
}

export default Navbar