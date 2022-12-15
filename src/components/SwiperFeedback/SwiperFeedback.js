import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiperFeedback.css";
import { dataFeedback } from "./data";
import { EffectCoverflow, Pagination } from "swiper";

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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <ul>
          {dataFeedback.map((item) => (
            <SwiperSlide>
              <li key={item.index}>
                <img className="imageSlider" src={item.image} alt={item.name} />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
}
