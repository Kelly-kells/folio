
import pot from "../../assets/africanpot.jpeg"
import film from "../../assets/flimore.jpeg"
import fit from "../../assets/fit.png"
import ai from "../../assets/projectai.jpeg"

import './portfolio.css';

const Folio = () => {
  return (
    <section id='portfolio'>
      <h2> My Work</h2>
      <p> Projects I've worked on</p>
      <div className="container folio-container">
          <div className='swiper-folio'>
            <div className="folio-contents">
              <div className="folio-image">
                <img src={fit} alt="" /> 
              </div>
              <article>
                <p>
                FITNESS
                </p>
                <small>Web development |React|CSS|API</small>
                </article>
              <div className="folio-cta">
                  <a className=" btn primary" href="https://github.com/Kelly-kells/fit-fam" target='_blank'>Github</a>
                  <a className=' btn white' href="https://marchfitness.netlify.app" target='_blank'>Demo </a>
                </div>
            </div>
          </div>

        <div>
            <div className="swiper-folio">
              <div className="folio-contents">
                <div className="folio-image">
                  <img src={ai} alt="" />
                </div>
                <article>
                <p>
                ARTIFICIAL INTELLIGENCE
                </p>
                <small>Web development |React|CSS|UI/UX</small>
                </article>
                <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/Ai-project" target='_blank'>Github</a>
                    <a className=' btn white' href="https://project-ai.netlify.app" target='_blank'>Demo </a>
                  </div>
              </div>
            </div>
          </div>

          
          <div>
            <div className="swiper-folio">
              <div className="folio-contents">
                <div className="folio-image">
                  <img src={film} alt="" />
                </div>
                <article>
                <p>
               MOVIE SEARCH SITE
                </p>
                <small>Web development |React|CSS|API</small>
                </article>
                <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/movies" target='_blank'>Github</a>
                    <a className=' btn white' href="https://filmore.netlify.app" target='_blank'>Demo </a>
                  </div>
              </div>
            </div>

          </div>
          <div>
            <div className="swiper-folio">
              <div className="folio-contents">
                <div className="folio-image">
                  <img src={pot} alt="" />
                </div>
                <article>
                <p>
                RESTAURANT PAGE
                </p>
                <small>Web development |React|CSS|UI/UX</small>
                </article>
                <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                    <a className=' btn white' href="https://african-pot.netlify.app" target='_blank'>Demo </a>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
export default Folio