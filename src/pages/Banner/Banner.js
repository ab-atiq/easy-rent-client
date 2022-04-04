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
<<<<<<< HEAD:src/Components/Banner/Banner.js

=======
>>>>>>> 8a9d8ccfd196baec1c39efb217777198d12b9333:src/pages/Banner/Banner.js
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px" }}
            src="https://pngimg.com/uploads/audi/audi_PNG99491.png"
            alt=""
          />
        </SwiperSlide>
<<<<<<< HEAD:src/Components/Banner/Banner.js

=======
>>>>>>> 8a9d8ccfd196baec1c39efb217777198d12b9333:src/pages/Banner/Banner.js
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
            src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-PNG-Pic.png"
            alt=""
          />
        </SwiperSlide>
<<<<<<< HEAD:src/Components/Banner/Banner.js

        <SwiperSlide>
          <img
            style={{ width: "80%", height: "550px", }}
            src="https://pngimg.com/uploads/audi/audi_PNG99485.png"
            alt=""
          />
        </SwiperSlide>
=======
>>>>>>> 8a9d8ccfd196baec1c39efb217777198d12b9333:src/pages/Banner/Banner.js
      </Swiper>
    </>
  );
};

export default Banner;
