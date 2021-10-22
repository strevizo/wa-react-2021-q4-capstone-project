import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./slider.css"


function Slideswiper(){
    const banners = require('../../../mocks/en-us/featured-banners.json');
    const slidedata = Array.from(banners.results);
    const slides = [];

    for (let i = 0; i < slidedata.length; i += 1) {
      slides.push(
        <SwiperSlide key={`slide-${i}`}>
          <img
            src={slidedata[i].data.main_image.url}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
            class="slider-image"
          />
        </SwiperSlide>
      );
    }
    return(
       <React.Fragment>
           <Swiper id="main">{slides}</Swiper>
       </React.Fragment>
    )
}

export default Slideswiper;