import React from 'react'
import { GrMailOption } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"
import { } from "react-icons/ai"


import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <h5>contact me</h5>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <GrMailOption />
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
            <a href="mailto:Kellskelechi@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
            <AiFillLinkedin />
            <h4>LinkedIn</h4>
            <h5>Kelechi FAvour</h5>
            <a href="https://www.linkedin.com/in/kelechifavour01/">Send a message</a>
          </article>

          <article className="contact-option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>Dev Kelly</h5>
            <a href="https://twitter.com/KelechiKells">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>

    </section>
  )
}

export default Contact