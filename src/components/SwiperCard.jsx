import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


const SwiperCard = () => {
  

    return (
        <>

            <div className="">
                <h1 className="text-center">View All Products </h1>
                {/* swiper  */}
                <div className="swiper my-10 ">

                    <Swiper watchSlidesProgress={true} slidesPerView={5}  className="mySwiper2">

                      
                                <SwiperSlide className="slide">  </SwiperSlide>
                    
                    </Swiper>

                </div>
            </div>

        </>
    );
};




export default SwiperCard;