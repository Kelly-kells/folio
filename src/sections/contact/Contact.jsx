import React from 'react'
import {GrMailOption}from "react-icons/gr"

import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <h5>contact me</h5>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <GrMailOption/>
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
             <a href="mailto:Kellskelechi@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
            <GrMailOption/>
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
             <a href="mailto:Kellskelechi@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
            <GrMailOption/>
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
             <a href="mailto:Kellskelechi@gmail.com">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
      
      </section>
  )
}

export default Contact