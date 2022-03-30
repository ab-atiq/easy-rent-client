import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Pagination } from "swiper";


const Banner = () => {
    return (
        <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/mqqvx1X/pexels-mike-136872.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/h79szJF/pexels-sourav-mishra-2710043.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/6wNmYDJ/pexels-aaron-curtis-119435.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/fG7fRfL/pexels-mike-120049.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/6J83Qz0/pexels-pixabay-358070.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/8sYMnRB/pexels-mike-116675.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img style={{ width:'100%', height:'550px'}} src="https://i.ibb.co/hBnkLGJ/pexels-mike-170811.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;