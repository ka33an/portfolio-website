import {Link} from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className='Navbar'>
 
    <div className='Menu'> 
        <Link className="Menuitem" to ="/"> HOME</Link>
        <Link className="Menuitem" to ="/About"> ABOUT</Link>
        <Link className="Menuitem" to ="/Work">WORK</Link>
        <Link className="Menuitem" to ="/Contact">CONTACT</Link>     
    </div>
 
   </nav>
  )
}

export default Navbar