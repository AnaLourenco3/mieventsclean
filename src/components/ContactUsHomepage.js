import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import video from "./images/videoParallax.mp4";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";

function ContactUsHomepage() {
  const navigate = useNavigate();

  return (
    <Container>
      <ParallaxProvider>
        <ParallaxBanner style={{ height: "600px" }}>
          <ParallaxBannerLayer speed={-20}>
            <video
              src={video}
              alt="wedding img"
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-10}>
            <TextWrapper>
              <Text>Vamos Celebrar!</Text>
              <Button onClick={() => navigate("/contact")}>Contacto</Button>
            </TextWrapper>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
    </Container>
  );
}

export default ContactUsHomepage;

const Container = styled.div`
  width: 100%;
  margin: 180px auto 150px auto;
  height: 400px;
  padding: 30px 0px;
  text-align: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.h1`
  font-family: Amsterdam;
  color: white;
  font-size: 3rem;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background: none;
  cursor: grab;
  font-size: 1.5rem;
  font-weight: medium;
  border: 2px solid white;
  border-radius: 50px;

  &:hover {
    background-color: rgb(250, 250, 250, 0.2);
    padding: 11px;
  }

  &:active {
    background-color: rgb(250, 250, 250, 0.4);
    padding: 11px;
  }
`;
