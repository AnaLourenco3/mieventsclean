import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import SwiperFeedback from "./components/SwiperFeedback/SwiperFeedback";
import ContactUs from "./components/ContactUs";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import SwiperPanorama from "./components/SwiperPanorama/SwiperPanorama";
import "./index.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
