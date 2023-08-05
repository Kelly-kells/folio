import React from 'react'

import {AiFillCheckCircle,AiFillGithub} from "react-icons/ai"
import { BiLogoJavascript,BiLogoReact,BiLogoRedux} from "react-icons/bi"

import {SiReactrouter} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"


import "./skills.css"


const Skills = () => {
  return (
    <section id="skills">
    <h2> My SKills</h2>
    <p>I possess the following skills:</p>

    <div className="container skills-container">
    <div className="skills">
    <div className="skills-head">
           <h3>Styling</h3>
        </div>
      <div className="skills-content">
      
          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4> Boostrap</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4>Tailwind CSS</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4> CSS</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4>Material UI</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
         <div>
         <h4>Styled-components</h4>
          <small>Experienced</small>
         </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4>Materialize-CSS</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4>Three.js</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
        <div>
        <h4>Framer motion</h4>
          <small>Intermediate</small>
        </div>
          </article> 
      </div>
    </div>

    <div className="skills">
    <div className="skills-head">
           <h3>Language/Framework/Lib</h3>
        </div>
      <div className="skills-content">
     
          <article className="skills-details">
          <BiLogoJavascript className='icons'/>
          <div>
          <h4> Javascript</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <BiLogoRedux className='icons'/>
          <div>
          <h4>Redux</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <BiLogoReact className='icons'/>
          <div>
          <h4> React JS</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <SiReactrouter className='icons'/>
          <div>
          <h4>React-Router</h4>
          <small>Experienced</small>
          </div>
          </article>

          <article className="skills-details">
          <TbBrandNextjs className='icons'/>
         <div>
         <h4>Next-JS</h4>
          <small>Experienced</small>
         </div>
          </article>

<article className="skills-details">
          <AiFillCheckCircle className='icons'/>
          <div>
          <h4>Commerce.js</h4>
          <small>Intermediate</small>
          </div>
          </article>

          <article className="skills-details">
          <AiFillCheckCircle className='icons'/>
        <div>
        <h4>Email.js</h4>
          <small>Experienced</small>
        </div>
          </article>

          <article className="skills-details">
          <AiFillGithub className='icons'/>
          <div>
            <h4>Git/Github</h4>
          <small>Experienced</small>
          </div>
          </article>
      </div>
    </div>
    </div>


     {/*<h2> My SKills</h2>
      <p>I possess the following skills:</p>
         <div className="container skills-container">
         
         <div className="skills-content">
         <article className='skills'>
        <div className="skill-head">
           <h3>Styling</h3>
        </div>
          
          <ul className="skill-list">
           <div className="skill-flex">
           <li >
              <AiFillCheckCircle className='icons'/>
              <p> Boostrap</p>
             </li>

             <li >
              <BiLogoTailwindCss className='icons'/>
              <p> Tailwind css</p>
             </li>

             <li >
              <BsFiletypeCss className='icons'/>
              <p> CSS</p>
             </li>

            <div>
            <li >
              <SiMui className='icons'/>
              <p> Material UI</p>
             </li>
             

             <li >
              <SiStyledcomponents className='icons'/>
              <p> Styled-Components</p>
             </li>
             <li >
              <DiMaterializecss className='icons'/>
              <p> Materilize-CSS</p>
             </li>
            </div>

           </div>

           
                
          </ul>
        
         </article>
         </div>

         <article className='skills'>
     
        <div className="skill-head">
        <h3>Language/Frameworks/Libs</h3>
        </div>
          
          <ul className="skill-list">
                <li >
              <BiLogoJavascript className='icons'/>
              <p> Javascript</p>
             </li>

             <li >
              <BiLogoReact className='icons'/>
              <p> React-JS</p>
             </li>

             <li >
              <SiReactrouter className='icons'/>
              <p> React-Router</p>
             </li>

             <li >
              <AiFillGithub className='icons'/>
              <p> Git/Github</p>
             </li>

             <li >
              <TbBrandNextjs className='icons'/>
              <p> Next-JS</p>
             </li>
             <li >
              <AiFillCheckCircle className='icons'/>
              <p> Commerce-Js</p>
             </li>
          </ul>
        
         </article>

         
  </div>*/}
        </section>
  )
}

export default Skills