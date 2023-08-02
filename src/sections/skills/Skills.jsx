import React from 'react'

import {AiFillCheckCircle} from "react-icons/ai"
import "./skills.css"


const Skills = () => {
  return (
    <section id="skills">
      <h3>My Skills</h3>
         <div className="container about-container">
         <article className='skills'>
        <div className="service-head">
          <h3>Styling</h3>
          <ul className="skill-list">
                <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>

             <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>

             <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>

             <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>

             <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>
          </ul>
        </div>
         </article>
         </div>
        </section>
  )
}

export default Skills