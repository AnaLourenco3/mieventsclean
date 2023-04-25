import { InstagramEmbed } from "react-social-media-embed";
import styled from "styled-components";

function Instagram() {
  return (
    <InstaContainer>
      <Column1>
        <TitleInsta>Ver mais no Instagram:</TitleInsta>
        <Insta>
          <InstagramEmbed
            url="https://www.instagram.com/p/Cjyfo2cM4kW/"
            width={328}
            captioned={false}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/ChrzUNTsFrM/"
            width={328}
            captioned={false}
          />
          {/* <InstagramEmbed
          url="https://www.instagram.com/p/CmC2VlCsgEW/"
          width={328}
          captioned={false}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/Cb0uInJMBxD/"
          width={328}
          captioned={false}
          placeholderDisabled
        /> */}
        </Insta>
      </Column1>
      <Column2>
        <Overlay></Overlay>
        <Quote>
          "Quanto mais elogiamos e celebramos a vida, mais motivos temos para
          celebrar." - Oprah Winfrey
        </Quote>
      </Column2>
    </InstaContainer>
  );
}

export default Instagram;

const InstaContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  /* padding: 80px 0 120px 0; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7d9883;
  padding: 80px 0 120px 0;
  width: 100%;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgb(207, 222, 235); */
  background-image: url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0 120px 0;
  width: 100%;
  position: relative;
`;

const Insta = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TitleInsta = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  font-family: Amsterdam;
  margin: 0 0 50px 70px;
  color: white;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 50px 40px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(220, 220, 220, 0.4);
  z-index: 0;
`;

const Quote = styled.div`
  width: 60%;
  font-size: 2.2rem;
  font-weight: 300;
  font-family: Amsterdam;
  margin: auto;
  color: white;
  text-shadow: 4px 1px 4px black;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    width: 80%;
  }
`;
