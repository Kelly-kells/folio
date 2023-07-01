import React from 'react'
import "./navbar.css"
import logo from "../../assets/mylogo.png"
import Data from './Data'

const Navbar = () => {


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
        <ul className='nav-menu'>
      { 
      Data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
        </ul>


      </div>
      </nav>
  )
}

export default Navbar