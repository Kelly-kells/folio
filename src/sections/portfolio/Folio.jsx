
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
                <article>

                </article>
              </div>
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

                  <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                    <a className=' btn white' href="https://marchfitness.netlify.app" target='_blank'>Demo </a>
                  </div>
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
                <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                    <a className=' btn white' href="https://marchfitness.netlify.app" target='_blank'>Demo </a>
                  </div>
              </div>
            </div>

          </div>
          <div>
            <div className="swiper-folio">
              <div className="folio-contents">
                <div className="folio-image">
                  <img src={pot} alt="" />

                  <div className="folio-cta">
                    <a className=" btn primary" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                    <a className=' btn white' href="https://marchfitness.netlify.app" target='_blank'>Demo </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
export default Folio