import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

// import cars from "./findCar.json";
import CarSlide from "./CarSlide";

const FindCar = () => {
  const [cars, setCars] = useState();
  useEffect(() => {
    fetch("./findCar.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Find your drive
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Explore the world's largest car sharing marketplace
      </Typography>
      <Container>
        <Typography variant="h4" sx={{ my: 3 }}>
          Browse by make
        </Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {cars?.map((car) => (
            <SwiperSlide>
              <CarSlide key={car.id} car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default FindCar;
