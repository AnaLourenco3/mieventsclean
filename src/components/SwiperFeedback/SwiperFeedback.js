import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swiperFeedback.css";
import { dataFeedback } from "./data";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function SwiperFeedback() {
  return (
    <>
      <h1 className="heading">What our clients say:</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {dataFeedback.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="imageSlider" src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
