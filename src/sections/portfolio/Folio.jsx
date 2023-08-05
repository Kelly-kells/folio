

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import fit from "../../assets/fitApp.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './portfolio.css';
import { FreeMode, Pagination } from 'swiper/modules';
const Folio = () => {
  return (
    <section id='portfolio'>
      <h2> My SKills</h2>
      <p>I possess the following skills:</p>
      <div className="container folio-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="folio-contents">
              <div className="folio-image">
                <img src={fit} alt="" />
              </div>
              <div className="folio-cta">
                <a className="btn white" href="https://github.com/Kelly-kells/fit-fam" target='_blank'>Github</a>
                <a className='btn primary' href="https://marchfitness.netlify.app" target='_blank'>Link </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Folio