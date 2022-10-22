import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import img
import slideImg1 from '../../images/Rectangle 1.png';
import slideImg2 from '../../images/sky.jpg';
import slideImg3 from '../../images/hill.jpg';

const Slider = () => {
    return (
         <div className='-z-50'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-[600px]"
                        src={slideImg1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-[600px]"
                        src={slideImg2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-[600px]"
                        src={slideImg3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
         </div>
    );
};

export default Slider;