import React, { useEffect, useRef, useState } from "react";
import swiper1 from '../assets/swiper1.jpg'
import swiper2 from '../assets/swiper2.jpg'
import swiper3 from '../assets/swiper3.jpg'
import swiper4 from '../assets/swiper4.jpg'
import swiper5 from '../assets/swiper5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Hero = () => {
   
    return (
        <>
            <div className="main h-[84vh] mx-auto mt-20 mb-5 max-w-7xl flex" >
                {/* first div  */}
                <div className="w-[100%]  lg:w-[70%] h-full " >


                    <Swiper
                    
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={swiper1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={swiper2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={swiper3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={swiper4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={swiper5} alt="" /></SwiperSlide>


                    </Swiper>

                </div>





                {/* second div  */}
                <div className="w-[30%] h-full hidden lg:block ">

                    <div className="div1  w-[90%] h-[45%] mx-auto mt-1" >

                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={swiper1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper5} alt="" /></SwiperSlide>


                        </Swiper>
                    </div>

                    <div className="div1  w-[90%] h-[45%] mx-auto mt-5" >

                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={swiper1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={swiper5} alt="" /></SwiperSlide>


                        </Swiper>
                    </div>

                </div>

            </div>
        </>
    );
};


export default Hero;