import React from 'react'
import "./header.css"
import headerImg from "../../assets/desktop.png"
const Header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <div className="header-section">
          <img src={headerImg} alt="" />
        </div>

      </div>
      </header>
  )
}

export default Header