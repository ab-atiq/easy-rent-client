import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://guarded-taiga-13015.herokuapp.com/api/addreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    reviews?.map(review => <SwiperSlide>
                        <Review key={review?._id} review={review}></Review>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Reviews;