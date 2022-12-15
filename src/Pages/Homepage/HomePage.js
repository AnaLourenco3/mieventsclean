import styled from "styled-components";
import SwiperPanorama from "../../components/SwiperPanorama/SwiperPanorama";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import ContactUs from "../../components/ContactUs";
import SwiperFeedback from "../../components/SwiperFeedback/SwiperFeedback";

const ContainerCarouselSlider = styled.div`
  width: auto;
  height: auto;
  margin: 135px 0 70px 0;
`;

const ContainerFeedbackSlider = styled.div`
  width: 90%;
  height: 500px;
  margin: auto;
`;

function HomePage() {
  return (
    <div>
      <ContainerCarouselSlider>
        <SwiperPanorama />
      </ContainerCarouselSlider>
      <ImageGrid />
      <ContactUs />
      <ContainerFeedbackSlider>
        <SwiperFeedback />
      </ContainerFeedbackSlider>
    </div>
  );
}

export default HomePage;
