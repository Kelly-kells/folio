import React, { useRef } from 'react'
import { HiMail } from "react-icons/hi"
import { BsTwitter } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

import emailjs from '@emailjs/browser';


import "./contact.css"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_egyifda', 'template_pvgemhr', form.current, 'y5ypNlRhu016d7tFI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2> Get In Touch</h2>
      <p>contact me</p>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiMail className='option-icon' />
            <h4>Email</h4>
            <h5>kellskelechi@gmail.com</h5>
            <a href="mailto:Kellskelechi@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className="contact-option">
            <AiFillLinkedin className='option-icon' />
            <h4>LinkedIn</h4>
            <h5>Kelechi FAvour</h5>
            <a href="https://www.linkedin.com/in/kelechifavour01/" target='_blank'>Send a message</a>
          </article>

          <article className="contact-option">
            <BsTwitter className='option-icon' />
            <h4>Twitter</h4>
            <h5>Dev Kelly</h5>
            <a href="https://twitter.com/KelechiKells" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn primary'>Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact