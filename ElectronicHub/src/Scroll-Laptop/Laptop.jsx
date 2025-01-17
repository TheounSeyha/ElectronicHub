// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Laptop.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import image from "../Photo/card.jpg"

export default function Laptop() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
