import React from 'react'


import { AiFillCheckCircle, AiFillGithub } from "react-icons/ai"
import { BiLogoJavascript, BiLogoReact, BiLogoRedux } from "react-icons/bi"

import { SiReactrouter } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"


import "./skills.css"
import PercentageBar from './PercentageBar'


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
              <AiFillCheckCircle className='icons' />
              <div>
                <h4> Boostrap</h4>
                <PercentageBar percentage={100} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Tailwind CSS</h4>
                <PercentageBar percentage={100} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4> CSS</h4>
                <PercentageBar percentage={100} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Material UI</h4>
                <PercentageBar percentage={80} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Styled-components</h4>
                <PercentageBar percentage={75} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Materialize-CSS</h4>
                <PercentageBar percentage={70} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Three.js</h4>
                <PercentageBar percentage={40} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Framer motion</h4>
                <PercentageBar percentage={40} />
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
              <BiLogoJavascript className='icons' />
              <div>
                <h4> Javascript</h4>
                <PercentageBar percentage={90} />
              </div>
            </article>

            <article className="skills-details">
              <BiLogoRedux className='icons' />
              <div>
                <h4>Redux</h4>
                <PercentageBar percentage={75} />
              </div>
            </article>

            <article className="skills-details">
              <BiLogoReact className='icons' />
              <div>
                <h4> React JS</h4>
                <PercentageBar percentage={100} />
              </div>
            </article>

            <article className="skills-details">
              <SiReactrouter className='icons' />
              <div>
                <h4>React-Router</h4>
                <PercentageBar percentage={95} />
              </div>
            </article>

            <article className="skills-details">
              <TbBrandNextjs className='icons' />
              <div>
                <h4>Next-JS</h4>
                <PercentageBar percentage={80} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Commerce.js</h4>
                <PercentageBar percentage={58} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillCheckCircle className='icons' />
              <div>
                <h4>Email.js</h4>
                <PercentageBar percentage={100} />
              </div>
            </article>

            <article className="skills-details">
              <AiFillGithub className='icons' />
              <div>
                <h4>Git/Github</h4>
                <PercentageBar percentage={85} />
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Skills