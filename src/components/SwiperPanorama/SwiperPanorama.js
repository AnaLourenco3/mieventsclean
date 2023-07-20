import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiperPanorama.css";
import { Autoplay } from "swiper";
import Panorama1 from "./Images/Panorama1.png";
import Panorama2 from "./Images/Panorama2.png";

export default function SwiperPanorama() {
  return (
    <>
      <Swiper
        className="swiperContainer"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="swiperSlide2">
          <img
            className="imagePanoramaHome"
            src={Panorama1}
            alt="img wedding"
          />

          <div>
            <div className="imgTitle">Casamentos</div>
            <div className="services">
              <p>Pedidos de Casamento</p>
              <p>Despedidas de Solteira</p>
              <p>Casamentos</p>
              <p>Renovação de Votos/Bodas</p>
              <p>Celebrante</p>
            </div>
          </div>
          <div>
            <div className="imgTitle1">Eventos</div>
            <div className="services1">
              <p>Batizados</p>
              <p>Baby Showers</p>
              <p>Chá de Revelação</p>
              <p>Aniversários Infantis</p>
              <p>Aniversários Adultos</p>
              <p>Outros Eventos</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <img
            className="imagePanoramaHome"
            src={Panorama2}
            alt="img wedding"
          />
          <div>
            <div className="imgTitle">Casamentos</div>
            <div className="services">
              <p>Pedidos de Casamento</p>
              <p>Despedidas de Solteira</p>
              <p>Casamentos</p>
              <p>Renovação de Votos/Bodas</p>
            </div>
          </div>
          <div>
            <div className="imgTitle1">Eventos</div>
            <div className="services1">
              <p>Batizados</p>
              <p>Baby Showers</p>
              <p>Chá de Revelação</p>
              <p>Aniversários Infantis</p>
              <p>Aniversários Adultos</p>
              <p>Outros Eventos</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
