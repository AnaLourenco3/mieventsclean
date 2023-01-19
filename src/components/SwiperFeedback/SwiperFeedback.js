import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import "./swiperFeedback.css";
import { EffectCoverflow, Pagination, Autoplay, Zoom } from "swiper";

export default function SwiperFeedback({ props }) {
  return (
    <>
      <h1 className="heading">What our clients say:</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        zoom={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, Zoom]}
        className="mySwiper"
      >
        {props &&
          props.map((f, index) => (
            <SwiperSlide key={f.id}>
              <img className="imageSlider" src={f.imageUrl} alt="feedbacks" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
