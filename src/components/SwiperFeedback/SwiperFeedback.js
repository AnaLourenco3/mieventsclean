import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import "./swiperFeedback.css";
import { EffectCoverflow, Pagination, Autoplay, Zoom } from "swiper";
import styled from "styled-components";

export default function SwiperFeedback({ props }) {
  return (
    <Container>
      <ContainerFeedbackSlider>
        <h1 className="heading">Feedback dos clientes:</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          zoom={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
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
      </ContainerFeedbackSlider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  padding: 80px 0 150px 0;
  background-color: #f5f5f5;
`;

const ContainerFeedbackSlider = styled.div`
  width: 90%;
  height: 600px;
  margin: 0 auto;
`;
