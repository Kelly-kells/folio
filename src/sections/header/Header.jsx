import React from 'react'
import "./header.css"
import data from "./data"
import headerImg from "../../assets/header.png"
const Header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <div className="header-section">
          <img src={headerImg} alt="header-picture" />
        </div>
        <h3>FAVOUR KELECHI</h3>

        <p> Creating web interfaces that adapt and function seamlessly across multiple devices and screen sizes, ensuring an optimal user experience.</p>
        <div className="header-cta">
          <a href="#contact">Let's talk</a>
          <a href="#portfolio">My work</a>
        </div>

        <div className="header-socials">

        </div>
      </div>

    </header>
  )
}

export default Header