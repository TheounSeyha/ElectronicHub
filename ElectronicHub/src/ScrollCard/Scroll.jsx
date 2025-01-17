
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Scroll.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import image from "../Photo/card.jpg"
export default function Scroll() {
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

