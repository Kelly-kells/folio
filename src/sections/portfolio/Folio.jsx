

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import fit from "../../assets/fit.png"
import ai from "../../assets/projectai.jpeg" 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './portfolio.css';
import { FreeMode, Pagination } from 'swiper/modules';
const Folio = () => {
  return (
    <section id='portfolio'>
      <h2> My Work</h2>
      <p> Projects I've worked on</p>
      <div className="container folio-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='swipe-container'>
            <div className="folio-contents">
              <div className="folio-image">
                <img src={fit} alt="" />

                <div className="folio-cta">
                <a className=" white button" href="https://github.com/Kelly-kells/fit-fam" target='_blank'>Github</a>
                <a className=' button' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div>
              </div>
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-folio">
            <div className="folio-contents">
              <div className="folio-image">
               <img src={ai} alt="" />

               <div className="folio-cta">
                <a className=" button" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                <a className=' button' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div> 
              </div>
              
            </div>
            
            </div>
            
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-folio">
            <div className="folio-contents">
              <div className="folio-image">
               <img src={ai} alt="" />

               <div className="folio-cta">
                <a className=" button" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                <a className=' button' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div> 
              </div>
              
            </div>
            
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-folio">
            <div className="folio-contents">
              <div className="folio-image">
               <img src={ai} alt="" />

               <div className="folio-cta">
                <a className=" button" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                <a className=' button' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div> 
              </div>
              
            </div>
            
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-folio">
            <div className="folio-contents">
              <div className="folio-image">
               <img src={ai} alt="" />

               <div className="folio-cta">
                <a className=" button" href="https://github.com/Kelly-kells/African-spot" target='_blank'>Github</a>
                <a className=' button' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div> 
              </div>
              
            </div>
            
            </div>
            
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}
export default Folio