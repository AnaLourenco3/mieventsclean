import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiperPanorama.css";
import { Autoplay } from "swiper";

export default function SwiperPanorama() {
  return (
    <>
      <Swiper
        className="swiperContainer"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="swiperSlide2">
          <img
            className="imagePanorama"
            src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="img wedding"
          />
          <div>
            <div className="imgTitle">Weddings</div>
            <div className="services">
              <p>Wedding proposals</p>
              <p>Bachelorette parties</p>
              <p>Weddings</p>
              <p>Vow renewals</p>
            </div>
          </div>
          <div>
            <div className="imgTitle1">Events</div>
            <div className="services1">
              <p>Baptisms</p>
              <p>Baby Showers</p>
              <p>Gender revelation</p>
              <p>Birthday parties for children</p>
              <p>Birthday parties for adults</p>
              <p>Other events</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <img
            className="imagePanorama"
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="img wedding"
          />
          <div>
            <div className="imgTitle">Weddings</div>
            <div className="services">
              <p>Wedding proposals</p>
              <p>Bachelorette parties</p>
              <p>Weddings</p>
              <p>Vow renewals</p>
            </div>
          </div>
          <div>
            <div className="imgTitle1">Events</div>
            <div className="services1">
              <p>Baptisms</p>
              <p>Baby Showers</p>
              <p>Gender revelation</p>
              <p>Birthday parties for children</p>
              <p>Birthday parties for adults</p>
              <p>Other events</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
