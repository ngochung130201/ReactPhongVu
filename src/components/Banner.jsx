import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Mousewheel,Keyboard, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css/bundle";
import '../styles/banner.css'
import {Banner2, Banner3, Banner4, Banner5, Banner6, Banner7} from '../assets/index.js'
import SilderBar from './SilderBar';
import CartSale from './CartSale';
const Banner = () => {
  const BannerItem = [{
    Image:Banner2,
    urlIamge:'/'
  },
  {
    Image:Banner3,
    urlIamge:'/'
  },
  
  {
    Image:Banner4,
    urlIamge:'/'
  },
  
  {
    Image:Banner5,
    urlIamge:'/'
  },
  
  {
    Image:Banner6,
    urlIamge:'/'
  },
  
  {
    Image:Banner7,
    urlIamge:'/'
  },
  
  


]
  return (
    <div className="relative pt-32">
         <Swiper   cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper" 
      // install Swiper modules
      
    >
    {BannerItem.map(item=>{
      return (
        <div className="">
             <SwiperSlide>
        <a href={item.urlIamge}>
        <img src={item.Image} alt="" />
        </a>
      </SwiperSlide>
        </div>
      )
    })}
 
    
    </Swiper>
    <SilderBar></SilderBar>
    <CartSale></CartSale>
    </div>
  )
}

export default Banner