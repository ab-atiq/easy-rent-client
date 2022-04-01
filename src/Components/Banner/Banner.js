import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/system";

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
        <SwiperSlide>
          {" "}
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://i.ibb.co/ry0ckV5/Dark-Purple-and-Orange-Minimalist-Business-Youtube-Channel-Art-4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://pngimg.com/uploads/audi/audi_PNG99485.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://pngimg.com/uploads/tesla_car/tesla_car_PNG3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://pngimg.com/uploads/audi/audi_PNG99491.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-PNG-Pic.png"
            alt=""
          />
        </SwiperSlide>

       
      </Swiper>
    </>
  );
};

export default Banner;
