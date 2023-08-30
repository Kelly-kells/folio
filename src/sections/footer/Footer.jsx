import React from 'react'
import "./footer.css"
import {BsTwitter,BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
     <a href="#" className='footer-logo'>FAVOUR</a>
     <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="# skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="# contact">contact</a></li>
     </ul>

     <div className="footer-socials">
      <a href="https://github.com/Kelly-kells/"><BsGithub /></a>
      <a href="https://twitter.com/KelechiKells"><BsTwitter /></a>
      <a href="https://www.linkedin.com/in/kelechifavour01/"><BsLinkedin/></a>
     </div>
     <small className='copyright'>&copy; Favour Kelechi All rights reserved</small>
    </footer>
  )
}

export default Footer