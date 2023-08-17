import React from 'react'
import { GrMailOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"
import {AiFillLinkedin } from "react-icons/ai"


import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <h2> Get In Touch</h2>
      <p>contact me</p>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <GrMailOption />
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
            <a href="mailto:Kellskelechi@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className="contact-option">
            <AiFillLinkedin />
            <h4>LinkedIn</h4>
            <h5>Kelechi FAvour</h5>
            <a href="https://www.linkedin.com/in/kelechifavour01/" target='_blank'>Send a message</a>
          </article>

          <article className="contact-option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>Dev Kelly</h5>
            <a href="https://twitter.com/KelechiKells" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn primary'>Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact