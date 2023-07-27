import React from 'react'
import "./header.css"
import data from "./data"
import headerImg from "../../assets/header.png"
const Header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <div className="header-profile">
          <div className='header-img'>
            <img src={headerImg} alt="header-picture" />
          </div>

        </div>
        <div className='header-contents'>
          <h3>FAVOUR KELECHI</h3>

          <p> An experienced frontend developr that is Committed to creating an accessible web, ensuring all developed features comply with industry standards and web accessibility guidelines.Creating web interfaces that adapt and function seamlessly across multiple devices and screen sizes, ensuring an optimal user experience.</p>
          <div className="header-cta">
            <a href="#contact" className='btn primary'>Let's talk</a>
            <a href="#portfolio" className='btn white'>My work</a>
          </div>


          <div className="header-socials">
            {
              data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferer'>{item.icon}</a>)
            }

          </div>
        </div>


      </div>

    </header>
  )
}

export default Header