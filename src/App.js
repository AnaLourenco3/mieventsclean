import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import "./index.css";
import SwiperFeedback from "./components/SwiperFeedback/SwiperFeedback";
import ContactUs from "./components/ContactUs";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import SwiperPanorama from "./components/SwiperPanorama/SwiperPanorama";

const App = () => {
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

  return (
    <div>
      <div>
        <Header />
        <NavBar />
      </div>
      <ContainerCarouselSlider>
        <SwiperPanorama />
      </ContainerCarouselSlider>
      <ImageGrid />
      <ContactUs />
      <ContainerFeedbackSlider>
        <SwiperFeedback />
      </ContainerFeedbackSlider>
      <Footer />
    </div>
  );
};

export default App;
