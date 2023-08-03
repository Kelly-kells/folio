import React from 'react'

import {AiFillCheckCircle,AiFillGithub} from "react-icons/ai"
import {BiLogoTailwindCss, BiLogoJavascript,BiLogoReact} from "react-icons/bi"
import {BsFiletypeCss} from "react-icons/bs"
import {SiMui,SiStyledcomponents,SiReactrouter} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import {DiMaterializecss} from "react-icons/di"

import "./skills.css"


const Skills = () => {
  return (
    <section id="skills">
     <h2> My SKills</h2>
      <p>I possess the following skills:</p>
         <div className="container skills-container">
         
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

         
         </div>
        </section>
  )
}

export default Skills