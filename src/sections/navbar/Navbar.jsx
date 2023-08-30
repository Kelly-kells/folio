import React, {useState} from 'react'
import "./navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import logo from "../../assets/mylogo.png"
import Data from './Data'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const imageStyle = {
    width: '4rem',
    borderRadius: "15px"
  };
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className='nav-logo'>
          <img src={logo} alt="" style={imageStyle} />
        </a>
    
     <div className="menu-icon"  onClick={() => setIsOpen(!isOpen)}>
      <GiHamburgerMenu/>
    
      </div>
        <ul className={`nav-menu ${isOpen ? 'open mobile' : ''}`}>
      { 
      Data.map(item=> <li key={item.id}><a href={item.link} onClick={() => setIsOpen(false)}>{item.title}</a></li>)
      }
        </ul>


      </div>
      </nav>
  )
}

export default Navbar