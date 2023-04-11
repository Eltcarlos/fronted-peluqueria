import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

const TestimonialSlider = ({ data }) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img className="rounded-2xl" src={item.authorImg} alt="" />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-2xl mb-8 italic font-normal">{item.authorText}</h5>
                  <div>
                    <p className="text-lg text-rose">{item.authorName}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
