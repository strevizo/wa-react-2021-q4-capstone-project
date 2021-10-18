import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


function Slideswiper(){
    const banners = require('../../../mocks/en-us/featured-banners.json');
    const slides = [];
    console.log(banners.results[1].data.main_image.url);
    for (let i = 1; i < 4; i += 1) {
      slides.push(
        <SwiperSlide key={`slide-${i}`}>
          <img
            src={`banners.results[i].data.main_image.url`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
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